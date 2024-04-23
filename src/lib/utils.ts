import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toPascalCase(string: string) {
    return string
        .replace(/(\w)(\w*)/g, function (g0: string, g1: string, g2: string) {
            return g1.toUpperCase() + g2.toLowerCase();
        })
        .replace(/\s+/g, '');
}
