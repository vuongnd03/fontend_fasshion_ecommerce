import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a, b) => {
  return a.toString() === b.toString();
};

// Format số tiền sang VND (tỷ giá 1 USD = 24,000 VND)
export const formatVND = (usdAmount) => {
  const vndAmount = Math.round(usdAmount * 24000);
  return new Intl.NumberFormat('vi-VN').format(vndAmount);
};

// Format số tiền với đơn vị VND
export const formatPrice = (usdAmount) => {
  return `${formatVND(usdAmount)} VND`;
};
