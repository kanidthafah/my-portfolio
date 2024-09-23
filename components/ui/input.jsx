import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-[#ffb162] text-[#ffb162] font-light p-2 bg-primary text-sm lg:text-base placeholder:text-white/30 outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Input.displayName = "Input"

export { Input }
