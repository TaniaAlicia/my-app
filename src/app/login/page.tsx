'use client';

import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
 

  return (
    <div className="flex items-center w-full flex-col mt-10">
      <h2 className="mb-2 text-xl font-semibold">Iniciar sesión en la red social</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
