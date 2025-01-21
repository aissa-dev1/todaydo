import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface TasksFilterOptionProps extends ComponentProps<"button"> {
  active?: boolean;
  rounded?: boolean;
}

export default function TasksFilterOption({
  className,
  active,
  rounded,
  ...rest
}: TasksFilterOptionProps) {
  return (
    <button
      className={cn(
        "bg-white text-black text-center p-4 rounded-none cursor-pointer duration-300 hover:bg-primary hover:text-primary-foreground",
        {
          "bg-primary text-primary-foreground":
            typeof active === "boolean" && active,
          "rounded-md": typeof rounded === "boolean" && rounded,
        },
        className
      )}
      {...rest}
    />
  );
}
