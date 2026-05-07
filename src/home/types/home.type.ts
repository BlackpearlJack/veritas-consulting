import type {IconType} from "react-icons";

export interface Service {
  id: number
  title: string;
  description: string;
  icon: IconType;
  bg: string;
  accent: string;
  dark: boolean;
}

export interface StatItem {
  title: string;
  description: string;
}