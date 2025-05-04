// En tu componente PostBox, cuando el formulario se envíe, ajusta la petición como sigue:
'use client';
import { useForm } from "react-hook-form";
import Image from "next/image";
import messageApi from "../../../services/messages/messages.services"; // Asegúrate de importar tu API

type PostFormData = {
   parentId?: string 
};

type FormData = {
  message: string;
};

const PostBox = ({parentId }:  PostFormData ) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data:FormData) => {
    console.log("Mensaje enviado:", data.message);

    // Aquí agregamos el parentId (si existe)
    //const parentId = "d0309659-7abe-4ce2-8c56-0bb1a19402a5"; // Si no es un mensaje de respuesta, el parentId puede ser null

    try {
      // Asegúrate de usar el método POST correcto de la API
      const response = await messageApi.postMessage(data.message, parentId);

      if (response) {
        console.log("Mensaje posteado exitosamente:", response);
      }
    } catch (error) {
      console.error("Error al postear el mensaje:", error);
    }

    resetField("message"); // Limpia el textarea después de enviar
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start bg-white p-4 rounded-md shadow-md"
    >
      {/* Avatar */}
      <div className="relative w-10 h-10 mr-4">
        <Image
          src="https://i.pinimg.com/564x/e2/d0/56/e2d0565bb2af730ed20a565a032b60a8.jpg"
          alt="Avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Caja de texto */}
      <div className="flex-1">
        <textarea
          placeholder="¿Qué estás pensando?"
          {...register("message", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={3}
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? "Posteando..." : "Postear"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostBox;
