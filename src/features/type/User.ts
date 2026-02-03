import type { IconType } from "react-icons";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UsersState {
  users: User[];
  loadingUsers: boolean; // for fetching all users
  loadingUserDetails: boolean; // for fetching single user
  error: string | null;
  selectedUser: User | null;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// this is image type declear
export interface BaseEntity {
  id: number;
  thumbnailUrl?: string;
}

export type SizeType = "tiny" | "small" | "medium" | "large";

export type EmptyStatus = "search" | "file" | "notification";

export interface StateConfig {
  icon: IconType;
  title: string;
  description: string;
}
