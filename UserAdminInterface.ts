interface User {
  email: string;
  password: string;
}

interface ActivatedUser extends User {
  isActive: true;
}

interface Admin extends ActivatedUser {
  adminSince: Date;
}

export { User as IUser, , ActivatedUser as ConfirmedUser, Admin as IAdmin };
