import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines class names and merges Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format currency
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(price);
};

// Format date
export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
};

// Generate random ID
export const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
};