"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const LOGO_URL =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/v1770464871/Pratt_Electrical_Group_Logo_dzfg0y.png";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "text";
  theme?: "light" | "dark";
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src={LOGO_URL}
      alt="Pratt Electrical Group"
      width={400}
      height={100}
      className={cn("h-12 w-auto object-contain", className)}
      priority
    />
  );
}

// Simplified logo for mobile/small spaces
export function LogoMobile({ className }: Omit<LogoProps, "variant">) {
  return (
    <Image
      src={LOGO_URL}
      alt="Pratt Electrical Group"
      width={200}
      height={50}
      className={cn("h-8 w-auto object-contain", className)}
      priority
    />
  );
}

export default Logo;
