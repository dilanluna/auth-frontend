type SignupUser = {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsConditions: boolean;
};

type SigninUser = {
  email: string;
  password: string;
};
