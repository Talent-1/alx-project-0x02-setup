export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
  size: string;
  shape: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
