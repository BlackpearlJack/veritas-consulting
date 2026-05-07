import React, { useState, useRef, useCallback, forwardRef } from "react";
import { FaUpload, FaX } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { BsFileText } from "react-icons/bs";
import {CountryDropdown} from "@/components/country.dropdown.tsx";
import type {Country} from "@/components/types/country.type.ts";
import { countryData } from "@/components/country.data";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "phone";
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    {
      label,
      error,
      helperText,
      className = "",
      variant = "default",
      countryCode = "+254",
      onCountryCodeChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const hasValue =
      (props.value ?? "").toString().length > 0 ||
      (props.defaultValue ?? "").toString().length > 0;
    const isActive = isFocused || hasValue;

    const selectedCountry = React.useMemo<Country>(() => {
      return (
        countryData.find((c) => c.code === countryCode) ??
        countryData.find((c) => c.iso === "KE") ??
        countryData[0]
      );
    }, [countryCode]);

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setShowDropdown(false);
        }
      };
      if (showDropdown) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showDropdown]);

    const borderClass = error
      ? "border-red-400"
      : isFocused
        ? "border-accent-500"
        : "border-gray-200 hover:border-accent-300";

    if (variant === "phone") {
      return (
        <div ref={containerRef} className={`relative ${className}`}>
          <div
            className={`relative flex items-center border-b-2 transition-colors duration-200 bg-transparent ${borderClass}`}
          >
            <button
              type="button"
              onClick={() => setShowDropdown((v) => !v)}
              className="flex items-center gap-1.5 pl-4 pr-3 py-3 shrink-0 group focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={showDropdown}
            >
              <span className="text-xl leading-none">{selectedCountry.flag}</span>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors tracking-tight">
                {selectedCountry.code}
              </span>
              <IoChevronDown
                className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className="w-px h-5 bg-gray-200 shrink-0" />

            <input
              ref={ref}
              {...props}
              type="tel"
              onFocus={(e) => {
                setIsFocused(true);
                setShowDropdown(false);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                props.onBlur?.(e);
              }}
              className={`flex-1 px-3 bg-transparent focus:outline-none transition-all duration-200
                ${isActive ? "pt-5 pb-1" : "py-3"}`}
              placeholder=""
            />
          </div>

          <label
            className={`absolute pointer-events-none select-none transition-all duration-200 ease-out
              ${
              isActive
                ? "top-2 left-4 text-xs font-medium"
                : "top-1/2 -translate-y-1/2 text-sm left-26"
            }
              ${error ? "text-red-500" : isActive ? "text-blue-500" : "text-gray-400"}
               ${error ? "text-red-500" : isActive ? "text-accent-500" : "text-gray-400"}
            `}
          >
            {label}
          </label>

          {showDropdown && (
            <CountryDropdown
              ref={dropdownRef}
              selected={selectedCountry}
              onSelect={(country) => {
                onCountryCodeChange?.(country.code);
              }}
              onClose={() => setShowDropdown(false)}
            />
          )}

          {(error || helperText) && (
            <p className={`mt-1.5 text-xs ${error ? "text-red-500" : "text-gray-400"}`}>
              {error || helperText}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className={`relative ${className}`}>
        <div
          className={`relative border-b-2 transition-colors duration-200 ${borderClass}`}
        >
          <input
            ref={ref}
            {...props}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            className={`w-full px-4 bg-transparent focus:outline-none transition-all duration-200
              ${isActive ? "pt-5 pb-1" : "py-3"}`}
            placeholder=""
          />
        </div>

        <label
          className={`absolute left-4 pointer-events-none select-none transition-all duration-200 ease-out
            ${
            isActive
              ? "top-2 text-xs font-medium"
              : "top-1/2 -translate-y-1/2 text-sm"
          }
            ${error ? "text-red-500" : isActive ? "text-blue-500" : "text-gray-400"}
          `}
        >
          {label}
        </label>

        {(error || helperText) && (
          <p className={`mt-1.5 text-xs ${error ? "text-red-500" : "text-gray-400"}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

interface Option {
  value: string | number;
  label: string;
}

interface FloatingSelectProps {
  id: string;
  label: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  name?: string;
}

const FloatingSelect: React.FC<FloatingSelectProps> = ({
                                                         id,
                                                         label,
                                                         options,
                                                         placeholder,
                                                         required = false,
                                                         disabled = false,
                                                         error,
                                                         className = "",
                                                         value,
                                                         onChange,
                                                         onBlur,
                                                         name,
                                                         ...props
                                                       }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || (value !== "" && value !== undefined);
  const hasError = !!error;
  const displayPlaceholder = placeholder || `Select ${label}`;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Select Input */}
      <select
        id={id}
        name={name}
        value={value || ""}
        onChange={onChange}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        onFocus={() => setIsFocused(true)}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-3 text-base bg-transparent border-0 border-b-2 outline-none appearance-none cursor-pointer
          transition-all duration-200 ease-in-out pr-8
          ${
          hasError
            ? "border-red-500 text-red-900"
            : isFocused
              ? "border-blue-500 text-gray-900"
              : "border-gray-300 text-gray-700"
        }
          ${disabled ? "cursor-not-allowed opacity-60" : "hover:border-gray-400"}
               ${disabled ? "cursor-not-allowed opacity-60" : "hover:border-accent-300"}
          focus:ring-0
          ${!value ? (isFloating ? "text-gray-500" : "text-transparent") : ""}
        `}
        {...props}
      >
        <option value="" disabled>
          {displayPlaceholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-gray-900">
            {option.label}
          </option>
        ))}
      </select>

      {/* Floating Label */}
      <label
        htmlFor={id}
        className={`
          absolute left-4 pointer-events-none transition-all duration-200 ease-in-out
          ${isFloating ? "-top-5 text-xs" : "top-3 text-base"}
          ${hasError ? "text-red-500" : isFocused ? "text-blue-500" : "text-gray-500"}
          ${disabled ? "opacity-60" : ""}
        `}
      >
        {label}
      </label>

      {/* Dropdown Arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
        <IoChevronDown
          className={`
            w-5 h-5 transition-transform duration-200 ease-in-out
            ${isFocused ? "rotate-180" : "rotate-0"}
            ${hasError ? "text-red-500" : "text-gray-400"}
          `}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-500 animate-in fade-in duration-200">{error}</p>
      )}
    </div>
  );
};

interface FloatingFileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFilesChange?: (files: File[]) => void;
  className?: string;
}

function FloatingFileUpload({
                              label = "Upload files",
                              accept = "*/*",
                              multiple = false,
                              maxSize = 30,
                              onFilesChange,
                              className = "",
                            }: FloatingFileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasFiles = files.length > 0;
  const isActive = isFocused || isDragOver || hasFiles;

  const handleFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const fileArray = Array.from(newFiles);
      const validFiles = fileArray.filter((file) => {
        return file.size <= maxSize * 1024 * 1024; // Convert MB to bytes
      });

      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles.slice(0, 1);
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    },
    [files, maxSize, multiple, onFilesChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        handleFiles(e.target.files);
      }
    },
    [handleFiles]
  );

  const removeFile = useCallback(
    (index: number) => {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    },
    [files, onFilesChange]
  );

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return BsFileText; // You can use a specific image icon if you import one
    if (file.type.includes("text") || file.type.includes("document")) return BsFileText;
    return FaUpload; // Use FaUpload as a generic file icon
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className={`relative ${className}`}>
      {/* Floating Label */}
      <label
        className={`absolute left-4 transition-all duration-200 ease-out pointer-events-none select-none
          ${
          isActive
            ? "top-2 text-xs text-blue-600 font-medium"
            : "top-1/2 -translate-y-1/2 text-gray-500"
        }
        `}
      >
        {label}
      </label>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full min-h-15 border-2 border-dashed rounded-xl cursor-pointer
          transition-all duration-300 ease-out focus:outline-none
          ${
          isDragOver
            ? "border-blue-400 bg-blue-50"
            : isActive
              ? "border-blue-300 bg-blue-50/30"
              : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50"
        }
          ${isFocused ? "ring-4 ring-blue-100" : ""}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          title={label}
          aria-label={`Upload ${label}`}
        />

        {/* Upload Content */}
        <div className="flex items-center justify-center p-6 pt-8">
          {!hasFiles ? (
            <div className="text-center">
              <FaUpload
                className={`mx-auto h-6 w-6 mb-2 transition-colors
                ${isDragOver ? "text-blue-500" : "text-gray-400"}
              `}
              />
              <p className="text-sm text-gray-600">
                Drop files here or <span className="text-blue-600 font-medium">browse</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Max {maxSize}MB {multiple ? "per file" : ""}
              </p>
            </div>
          ) : (
            <div className="w-full space-y-2">
              {files.map((file, index) => {
                const FileIcon = getFileIcon(file);
                return (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="shrink-0">
                        <FileIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={`Remove ${file.name}`}
                    >
                      <FaX className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
              {multiple && (
                <div className="text-center pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Drop more files or click to add more</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ label, error, helperText, className = "", resize = "vertical", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue =
      (props.value?.toString() ?? "").length > 0 ||
      (props.defaultValue?.toString() ?? "").length > 0;
    const isActive = isFocused || hasValue;

    const resizeClass = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    }[resize];

    return (
      <div className={`relative ${className}`}>
        <textarea
          ref={ref}
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`w-full px-4 py-3 border-b-2 bg-transparent transition-all duration-200 ease-out
            focus:outline-none min-h-30
            ${resizeClass}
            ${
            error
              ? "border-red-300 focus:border-red-500"
              : "border-gray-200 focus:border-accent-500 hover:border-accent-300"
          }
            ${isActive ? "pt-6 pb-2" : ""}
          `}
          placeholder=""
        />
        <label
          className={`absolute left-4 transition-all duration-200 ease-out pointer-events-none select-none
            ${isActive ? "top-2 text-xs font-medium" : "top-4 text-base"}
            ${error ? "text-red-600" : isActive ? "text-accent-600" : "text-gray-500"}
          `}
        >
          {label}
        </label>
        {(error || helperText) && (
          <p className={`mt-1 text-xs ${error ? "text-red-600" : "text-gray-500"}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

interface FloatingCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const FloatingCheckbox: React.FC<FloatingCheckboxProps> = ({
                                                             label,
                                                             error,
                                                             helperText,
                                                             className = "",
                                                             ...props
                                                           }) => {
  return (
    <div className={`relative flex items-center space-x-2 ${className}`}>
      <input
        {...props}
        type="checkbox"
        className={`w-4 h-4 border-gray-300 rounded focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 ease-out
          ${error ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
        `}
      />
      <label className="text-base font-medium text-gray-700 select-none">
        {label}
      </label>
      {(error || helperText) && (
        <p
          className={`mt-1 text-xs ${error ? "text-red-600" : "text-gray-500"}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

interface FloatingDateInputProps {
  id?: string; // optional, defaults to generated id
  label: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
}

const FloatingDateInput: React.FC<FloatingDateInputProps> = ({
                                                               id: providedId,
                                                               label,
                                                               error,
                                                               disabled = false,
                                                               required = false,
                                                               className = "",
                                                               value,
                                                               onChange,
                                                               onBlur,
                                                               name,
                                                               ...props
                                                             }) => {
  const generatedId = React.useId();
  const id = providedId || generatedId;
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = Boolean(value && value.length > 0);
  const isFloating = focused || hasValue;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          title="Date Picker"
          id={id}
          ref={inputRef}
          type="date"
          name={name}
          value={value ?? ""}
          onChange={onChange}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          onFocus={() => setFocused(true)}
          disabled={disabled}
          required={required}
          placeholder=" " // helps to float label consistency
          className={`
            peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-b-2
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-0
            disabled:opacity-50 disabled:cursor-not-allowed
            ${!hasValue && !focused ? "[&::-webkit-datetime-edit]:opacity-0" : ""}
            ${error
            ? "border-b-destructive"
            : focused
              ? "border-b-accent-500"
              : "border-b-gray-300 hover:border-b-accent-300"}
          `}
          {...props}
        />

        <label
          htmlFor={id}
          className={`
            absolute left-4 transition-all duration-200 ease-in-out cursor-text
            ${isFloating
            ? "top-2 text-xs text-gray-600"
            : "top-1/2 -translate-y-1/2 text-base text-gray-500"}
            ${focused && !error ? "text-accent-500" : ""}
            ${error ? "text-red-500" : ""}
            ${disabled ? "cursor-not-allowed" : ""}
          `}
        >
          {label}
        </label>
      </div>

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-red-500 animate-in slide-in-from-top-1 duration-200"
        >
          {error}
        </p>
      )}
    </div>
  );
};

interface TimeInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
  helperText?: string;
  show12Hour?: boolean;
}

const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
  ({ label, error, helperText, className = "", show12Hour = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = (props.value ?? "").toString().length > 0 || (props.defaultValue ?? "").toString().length > 0;
    const isActive = isFocused || hasValue;

    return (
      <div className={`relative ${className}`}>
        <input
          {...props}
          ref={ref}
          type="time"
          className={`w-full px-4 py-3 border-b-2 bg-transparent transition-all duration-200 ease-out
            focus:outline-none
            ${
            error
              ? "border-red-300 focus:border-red-500"
              : "border-gray-200 focus:border-accent-500 hover:border-accent-300"
          }
            ${isActive ? "pt-6 pb-2" : ""}
          `}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          placeholder=""
        />

        <label
          className={`absolute left-4 transition-all duration-200 ease-out pointer-events-none select-none
            ${isActive ? "top-2 text-xs font-medium" : "top-1/2 -translate-y-1/2"}
            ${error ? "text-red-600" : isActive ? "text-accent-600" : "text-gray-500"}
          `}
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {show12Hour && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 pointer-events-none">
            12h
          </div>
        )}

        {(error || helperText) && (
          <p className={`mt-1 text-xs ${error ? "text-red-600" : "text-gray-500"}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

TimeInput.displayName = "TimeInput";


export { FloatingInput, FloatingSelect, FloatingFileUpload, FloatingTextarea, FloatingCheckbox, FloatingDateInput, TimeInput };
