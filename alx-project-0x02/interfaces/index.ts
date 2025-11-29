
export interface CardProps{
    id: string,
    name: string,
    title: string,
    content: string
}

export interface ButtonProps{
    shape: "rounded-sm" | "rounded-md" | "rounded-full"
    size: "small" | "medium" | "large"
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

export interface GeoProps {
  lat: string;
  lng: string;
}

export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

export interface UserProps {
  name: string;
  address: AddressProps;
  username: string;
  email: string;
  phone: string;
  website: string;
}
