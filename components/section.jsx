import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gridVariants = cva("grid place-items-center", {
  variants: {
    variant: {
      "grid-1": "grid-cols-1 text-center",
      "grid-2": "grid-cols-1 md:grid-cols-2",
    },
  },
  defaultVariants: {
    defaultVariants: {
      variant: "grid-1",
    },
  },
});

const Section = ({ children, className }) => {
  return (
    <section
      className={cn(
        "flex h-44 w-screen flex-col justify-center px-12 py-48 text-center lg:px-72",
        className,
      )}
    >
      {children}
    </section>
  );
};

const SectionGrid = ({ children, className, ...props }) => {
  return (
    <div className={cn(gridVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

const SectionHeading = ({ children, className }) => {
  return (
    <h1 className={cn("mb-2 text-2xl font-bold leading-7", className)}>
      {children}
    </h1>
  );
};

const SectionParagraph = ({ children, className }) => {
  return <h1 className={cn("text-md leading-7", className)}>{children}</h1>;
};

export { Section, gridVariants, SectionHeading, SectionParagraph, SectionGrid };
