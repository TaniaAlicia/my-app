'use client';

import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterFields from "./RegisterFields";

type RegisterFormData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};

const schema = yup.object({
  username: yup.string().required("El nombre de usuario es obligatorio"),
  name: yup.string().required("El nombre real es obligatorio"),
  photoUrl: yup.string().url("Debe ser una URL válida").required("La foto es obligatoria"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
}).required();

const RegisterForm = () => {
  const methods = useForm<RegisterFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Enviando datos de registro:", data);

    try {
      const response = await fetch("http://localhost:8080/api/public/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();
      console.log("Registro exitoso:", result);

      // Aquí podrías redirigir al login o iniciar sesión automáticamente
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-sm p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Registro</h2>
        <RegisterFields />
        <button type="submit" className="w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700">
          Registrarse
        </button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
