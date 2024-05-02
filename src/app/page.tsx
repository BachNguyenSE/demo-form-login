'use client';

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import LoginForm from "~/components/login-form/loginForm";
import ReactQueryProvider from "~/context/ReactQueryProvider";
import { setupClientMocks } from "~/mock/setup";
import {LoginFormContainer, PageContainer} from "./style";


export default function Home() {
  
  const form = useForm();
  
  const [loading, setLoading] = useState(true);
  if (loading) {
    setupClientMocks().then(() => {
      setLoading(false);
    });
  }

  if (loading) return null;

  return (
    <ReactQueryProvider>
      <PageContainer> 
        <FormProvider {...form}>
          <LoginFormContainer>
            <LoginForm/>
          </LoginFormContainer>
        </FormProvider>
      </PageContainer>
    </ReactQueryProvider>
  );
}
