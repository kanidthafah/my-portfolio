import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary p-2 text-light text-sm lg:text-base text-[#ffb162] placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffb162] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
