export interface CreateUserData {
  name: string;
  contact: number;
  email: string;
  password: string;
}
export interface RegularUserData {
  id: number;
  name: string;
  contact: number;
  email: string;
  status: string;
}
export interface UpdateUserPayload {
  id: number;
  status: string;
}
