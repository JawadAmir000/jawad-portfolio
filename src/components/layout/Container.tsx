import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-2xl lg:max-w-6xl",
    wide: "max-w-2xl lg:max-w-editorial",
  };

  return (
    <div className={cn("mx-auto px-5 sm:px-8 lg:px-12", widths[size], className)}>
      {children}
    </div>
  );
}
