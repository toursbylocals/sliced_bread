import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomName(max: number): string {
  return `Anonymous${Math.floor(Math.random() * max)}`;
}

export function generateRandomQuantity(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
