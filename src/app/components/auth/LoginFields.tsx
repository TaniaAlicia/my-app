"use client";

import { useFormContext } from "react-hook-form";

const LoginFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col mb-4">
        <label className="mb-1">Nombre de usuario:</label>
        <input
          type="text"
          {...register("username")}
          className="border border-blue-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {typeof errors.username?.message === "string" && (
          <span className="text-red-500 text-sm mt-1">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-1">Contraseña:</label>
        <input
          type="password"
          {...register("password")}
          className="border border-blue-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1">
            {typeof errors.password?.message === "string" && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </span>
        )}
      </div>
    </>
  );
};

export default LoginFields;
