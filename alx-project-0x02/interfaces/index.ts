export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
   size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md";
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
