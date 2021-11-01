import { Button, Divider, Typography } from "@material-ui/core";
import styles from "../AuthDialog.module.scss";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../utils/schemas/yup";
import { FormField } from "../../FormField";

interface LoginFormProps {
  handleMainAuth: () => void;
  handleRegisterOpen: () => void;
}

export const Login: React.FC<LoginFormProps> = ({
  handleMainAuth,
  handleRegisterOpen,
}) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Typography className={styles.title}>
        <p className={styles.backTitle}>
          <Button onClick={handleMainAuth}>
            <ArrowBack />
          </Button>
          Вход через почту
        </p>
        <div className={styles.registrationButton}>
          <span>или</span>
          <Button onClick={handleRegisterOpen} color="primary" variant="text">
            зарегистрироваться
          </Button>
        </div>
      </Typography>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name={"email"} label={"Почта"} />
          <FormField name={"password"} label={"Пароль"} />

          <Divider className="mt-30 mb-20" />
          <Button type={"submit"} color="primary" variant="contained">
            Войти
          </Button>
        </form>
      </FormProvider>
    </>
  );
};
