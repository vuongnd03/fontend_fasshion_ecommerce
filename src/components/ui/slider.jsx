import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step = 1,
      defaultValue,
      label,
      ...props
    },
    ref
  ) => {
    const defaultVal = defaultValue || [min, max];
    const [values, setValues] = React.useState(defaultVal);

    const handleValueChange = (newValues) => {
      setValues([newValues[0], newValues[1]]);
    };

    return (
      <div className="w-full relative">
        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          min={min}
          max={max}
          step={step}
          value={values}
          onValueChange={handleValueChange}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>

          {/* Thumb 1 with Label */}
          <div
            className="absolute -translate-x-1/2 -bottom-8 text-xs font-medium px-2 py-1 rounded z-10"
            style={{
              left: `${((values[0] - min) / (max - min)) * 100}%`,
            }}
          >
            {label}
            {values[0].toLocaleString('vi-VN')}
          </div>
          <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border border-primary/50 bg-black shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />

          {/* Thumb 2 with Label */}
          <div
            className="absolute -translate-x-1/2 -bottom-8 text-xs font-medium px-2 py-1 rounded z-10"
            style={{
              left: `${((values[1] - min) / (max - min)) * 100}%`,
            }}
          >
            {label}
            {values[1].toLocaleString('vi-VN')}
          </div>
          <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border border-primary/50 bg-black shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

