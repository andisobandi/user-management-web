import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cx = (...inputs) => twMerge(clsx(inputs));
