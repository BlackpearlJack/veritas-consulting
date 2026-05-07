import { useMutation } from "@tanstack/react-query";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { FloatingInput, FloatingTextarea } from "@/components/form.field.tsx";
import { LuCircleCheck, LuSend } from "react-icons/lu";
import Button from "../components/button.component.tsx";

type ContactFormState = {
  name: string;
  organization: string;
  email: string;
  challenge: string;
};

const initialFormState: ContactFormState = {
  name: "",
  organization: "",
  email: "",
  challenge: "",
};

const postInquiry = async (data: ContactFormState) => {
  await new Promise((r) => setTimeout(r, 1500));
  if (Math.random() < 0.1) throw new Error("The server is currently unreachable. Please try again.");
  return { success: true, data };
};

export function ContactPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [liftRatio, setLiftRatio] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactFormState>(initialFormState);

  const mutation = useMutation({
    mutationFn: postInquiry,
    onSuccess: () => setSubmitted(true),
  });

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setLiftRatio(Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const resetForm = () => setForm(initialFormState);

  const handleFormAction = async (formData: FormData) => {
    const payload: ContactFormState = {
      name: String(formData.get("name") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      email: String(formData.get("email") ?? ""),
      challenge: String(formData.get("challenge") ?? ""),
    };
    await mutation.mutateAsync(payload);
  };

  const resetAll = () => {
    mutation.reset();
    resetForm();
    setSubmitted(false);
  };

  const translateY = Math.max(0, (1 - liftRatio) * 40);

  return (
    <section ref={sectionRef} className="relative bg-primary-900 min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(248,249,251,1) 0%, rgba(248,249,251,0) 100%)",
          opacity: Math.max(0, 1 - liftRatio * 3),
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-10 py-24 md:py-32 w-full" style={{ transform: `translateY(${translateY}px)` }}>
        {!submitted ? (
          <>
            <div className="mb-16">
              <p className="text-sm tracking-widest3 uppercase text-secondary-500 font-light mb-5">Initiate Contact</p>
              <h2 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-6">
                The Path Forward
                <br />
                <span className="italic text-secondary-600">Begins with a</span>
                <br />
                Conversation
              </h2>
              <p className="text-base text-primary-50 font-light max-w-md leading-relaxed">
                Describe the challenge you're facing. We respond with a thoughtful perspective, not a sales pitch.
              </p>
            </div>

            <form action={handleFormAction} className="grid md:grid-cols-2 gap-6">
              <FloatingInput label="Your Name" name="name" type="text" value={form.name} onChange={handleChange} required />
              <FloatingInput label="Organization" name="organization" type="text" value={form.organization} onChange={handleChange} required />
              <FloatingInput label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required className="md:col-span-2" />

              <div className="md:col-span-2">
                <FloatingTextarea label="The Challenge You're Facing" name="challenge" value={form.challenge} onChange={handleChange} rows={5} required className="w-full" />
              </div>

              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <p className="font-body text-xs text-white/25 font-light max-w-xs leading-relaxed">
                  Your information is treated with the same discretion we apply to client engagements.
                </p>
                <Button type="submit" variant="primary" size="lg" className="px-8 py-4 transition-all duration-300 group">
                  <span className="inline-flex items-center gap-3">
                    <span>Send Inquiry</span>
                    <LuSend size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-4 text-accent-500 mb-8">
              <LuCircleCheck size={48} strokeWidth={1} />
              <div className="h-px flex-1 bg-accent-500/30" />
            </div>
            <h3 className="text-5xl md:text-7xl text-white font-light mb-8">Inquiry Received</h3>
            <p className="text-xl text-primary-50 font-light max-w-xl leading-relaxed mb-12">
              Thank you for reaching out. A partner will review your submission and contact you within one business day.
            </p>
            <button onClick={resetAll} className="text-accent-500 hover:text-accent-400 font-medium flex items-center gap-2 transition-all duration-300 hover:underline hover:underline-offset-2">
              Send another message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}