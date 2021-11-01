import React from "react";
import { Button, Divider, Typography } from "@material-ui/core";
import styles from "../AuthDialog.module.scss";
import { ArrowBack } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { RegistrationSchema } from "../../../utils/schemas/yup";
import { FormField } from "../../FormField";
interface RegisterFormProps {
  handleMainAuth: () => void;
  handleLoginOpen: () => void;
}

export const Register: React.FC<RegisterFormProps> = ({
  handleMainAuth,
  handleLoginOpen,
}) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegistrationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Typography className={styles.title}>
        <p className={styles.backTitle}>
          <Button onClick={handleMainAuth}>
            <ArrowBack />
          </Button>
          Регистрация
        </p>
        <div className={styles.registrationButton}>
          <span>или</span>
          <Button onClick={handleLoginOpen} color="primary" variant="text">
            войти
          </Button>
        </div>
      </Typography>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name={"fullname"} label={"Имя и фамилия"} />
          <FormField name={"email"} label={"Почта"} />
          <FormField name={"password"} label={"Пароль"} />

          <Divider className="mt-30 mb-20" />
          <Button
            type={"submit"}
            disabled={!form.formState.isValid}
            color="primary"
            variant="contained"
          >
            Зарегистрироваться
          </Button>
        </form>
      </FormProvider>
    </>
  );
};
