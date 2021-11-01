import * as yup from "yup";
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат почты")
    .required("Поле обязательно!"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов!")
    .required("Поле обязательно!"),
});

export const RegistrationSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(10, {
      message: "Введите полностью имя и фамилию",
    })
    .min(6, "Минимум 6 символов!")
    .required("Поле обязательно!"),
  email: yup
    .string()
    .email("Неверный формат почты")
    .required("Поле обязательно!"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов!")
    .required("Поле обязательно!"),
});
