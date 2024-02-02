import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const COLORS = [
  "#DC2626",
  "#D97706",
  "#059669",
  "#7C3AED",
  "#DB2777",
  "#017585",
  "#770dbe",
  "#590859",
  "#48d7b4",
  "#afea27",
  "#4cca5e",
  "#abd2c1",
  "#53f55b",
  "#e8cc9e",
  "#58fb80",
  "#e50bd0",
  "#6bf513",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}
