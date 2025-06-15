// criar uma interface CreateUserDto

export interface CreateUserDto {
  name: string;
  email: string;
  cpf: string;
  password: string;
  phone?: string; // Optional field
  age?: number; // Optional field
  isActive?: boolean; // Optional field
}
