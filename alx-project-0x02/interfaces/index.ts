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

export interface PostProps {
    userId: 'string';
    title: 'string';
    content: 'string';
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
