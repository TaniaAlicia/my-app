'use client';

import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginFields from "./LoginFields";

type LoginFormData = {
  username: string;
  password: string;
};

const loginSchema = yup.object({
  username: yup.string().required("El nombre de usuario es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const LoginForm = () => {
  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fetch("http://localhost:8080/api/public/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const result = await response.json();
      const token = result.token || result.accessToken || null;

      if (token) {
        localStorage.setItem("token", token);
        console.log("Login exitoso. Token guardado.");
      } else {
        alert("El servidor no devolvió un token.");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Credenciales incorrectas.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-sm p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
        <LoginFields />
        <button type="submit" className="w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700 mt-2">
          Iniciar sesión
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;