import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatDate(date) {
    const year = date.getFullYear();
    // Months are zero-based in JavaScript, so we need to add 1
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }

    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }

    return `${day}-${month}-${year}`;
}
