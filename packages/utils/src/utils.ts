// this is the cn helper: https://ui.shadcn.com/docs/installation/manual#add-a-cn-helper
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
