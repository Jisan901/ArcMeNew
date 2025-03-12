import {  ReactNode, forwardRef } from "react";

interface BlockProps {
  height?: string;
  width?: string;
  color?: string;
  rounded?: string;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

// Using forwardRef to handle the ref properly
export const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({ height = "100px", width = "100px", color = "green", rounded = "0", children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref} // Attach ref correctly
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: rounded,
          ...style,
        }}
        className={`${children ? "" : "grid place-items-center"} text-gray-300 text-2xl ${className}`}
        {...props}
      >
        {children ?? "Block"}
      </div>
    );
  }
);

// Provide a display name for debugging purposes
Block.displayName = "Block";
