export interface User {
  id: string;
  email: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}
