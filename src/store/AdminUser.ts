
export const AdminUserData = {
  id: 1,
  email: "tung.le0319@gmail.com",
  name: "Tung Le",
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocKQWEYtrrtW0Ji82mu2HDQwDwLoWqXjrNG_IlGf2FCSpA=s96-c",
  role: "ADMIN",
} as const;

// Define a general User type based on the properties of AdminUserData
type User = {
  readonly [K in keyof typeof AdminUserData]: (typeof AdminUserData)[K];
};

export const AdminUser: User = AdminUserData;