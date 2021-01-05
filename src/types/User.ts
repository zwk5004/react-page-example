export type AuthUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  verified: boolean;
};

export type UserRole = {
  id: number;
  role: string;
};
