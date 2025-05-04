"use client";

import { useFormContext } from "react-hook-form";

const RegisterFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col mb-4">
        <label>Nombre de usuario:</label>
        <input
          type="text"
          {...register("username")}
          className="border border-blue-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {typeof errors.username?.message === "string" && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>Nombre real:</label>
        <input
          type="text"
          {...register("name")}
          className="border border-blue-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {typeof errors.name?.message === "string" && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>Foto (URL):</label>
        <input
          type="text"
          {...register("photoUrl")}
          className="border border-blue-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {typeof errors.photoUrl?.message === "string" && (
          <span className="text-red-500 text-sm">
            {errors.photoUrl.message}
          </span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>Contraseña:</label>
        <input
          type="password"
          {...register("password")}
          className="border border-blue-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {typeof errors.password?.message === "string" && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
    </>
  );
};

export default RegisterFields;
