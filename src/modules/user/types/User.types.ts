export interface User {
  id: string;
  email: string;
  is_active: boolean;
  name: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}
