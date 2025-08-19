
export interface CardData{
    id: string,
    name: string,
    title: string,
    content: string
}

export interface ButtonProps{
    shape: "rounded-sm" | "rounded-md" | "rounded-full"
    title: string
}

export interface PostProps {
  userId: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// interfaces/index.ts

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
