"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder,
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 ps-12 pe-4 text-white placeholder:text-gray-500 focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/30"
      />
    </div>
  );
}
