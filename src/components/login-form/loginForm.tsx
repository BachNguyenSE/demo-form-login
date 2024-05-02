'use client';

import React from "react";
import { Button, Column, Row, Spacing, Text, TextLink, theme } from '@dls/web';
import { DataLoading, InputPasswordController, InputTextController } from '@geit/ui-components';
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TError } from "~/types/TError";
import { useLogin } from ".";
import { useNavigate } from "@geit/core";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Inputs = {
  username: string;
  password: string;
};

function LoginForm() {
  const router = useRouter();
  
  const [user, setUser] = useLocalStorage("user", "");
  const { mutateAsync: doLogin, isLoading: loginLoading, isError: isLoginEror, error: loginError } = useLogin();
  const { control, handleSubmit } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    const { username, password } = data;
    const expirationTime = new Date(
      new Date().getTime() + 1 * 60 * 60 * 1000
    );

    try {
      const res = await doLogin({
        username,
        password
      });
      console.log(isLoginEror);
      if(res){
        setUser(res);
        Cookies.set("user", res , {
          expires: expirationTime,
          path: "/",
        });
        console.log(user);
        router.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DataLoading isLoading={loginLoading} showAsOverlay>
        <Text type="pageTitle" fontWeight="bold" className="text-center">
          Login Page
        </Text>
        <Spacing top={1} />
        <Text type="body" className="text-center" fontSize={[16, 20]}>
          Please input user name and password!
        </Text>
        <Spacing top={2} />
        <Row>
          <Column noGutter xs={12} md={12}>
            <Spacing top={2}>
              <InputTextController
                control={control}
                name="username"
                bgColor="haze"
                label="user name"
                maxLength={9}
                rules={{ required: true }}
              />
            </Spacing>
          </Column>

          <Column noGutter xs={12} md={12}>
            <Spacing top={2}>
              <InputPasswordController
                control={control}
                name="password"
                bgColor="haze"
                label="password"
                maxLength={100}
                rules={{
                  required: true,
                }}
              />
            </Spacing>
          </Column>

          <Column noGutter xs={12} md={12}>
            <Spacing top={2}>
              <Button fullWidth type="submit">
                Login
              </Button>
            </Spacing>
            {isLoginEror && <Text color={theme.main.colours.errorRed}>{(loginError as TError)?.message}</Text>}
          </Column>
        </Row>
      </DataLoading>
    </form>
    
  );
}

export default LoginForm;
