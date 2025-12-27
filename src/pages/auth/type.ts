export interface FormLogin {
  email: string;
  password: string;
}

export interface FormRegister extends FormLogin {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface FormProfile {
    email: string;
    firstName: string;
    lastName: string;
}