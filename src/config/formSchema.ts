import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),

  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

export const registerSchema = loginSchema.concat(
  Yup.object({
    firstName: Yup.string().required("Nama wajib diisi"),

    lastName: Yup.string(),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Konfirmasi password tidak sama")
      .required("Konfirmasi password wajib diisi"),
  })
);

export const profileSchema = Yup.object({
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),

  firstName: Yup.string().required("Nama wajib diisi"),

  lastName: Yup.string(),
});

export const topupSchema = Yup.object({
    topup: Yup.number()
      .required('Nominal topup harus diisi')
      .positive('Nominal topup harus lebih besar dari 0')
      .integer('Nominal topup harus berupa angka bulat'),
  });
