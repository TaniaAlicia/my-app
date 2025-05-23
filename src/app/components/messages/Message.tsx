"use client";
import { MessageType } from "../../../types/message.types";
import Link from "next/link";
import Image from "next/image";
import RepliesCounter from "../counter/RepliesCounter";
import { useRouter } from "next/navigation";
//import UserCard, { UserCardLayout } from "../users/UserCard";

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  const router = useRouter();
  /*   return (
  <UserCard layout={UserCardLayout.HORIZONTAL} user={message.user} index={0} >
<p>{message.message}
</p>
  </UserCard>  */ //ESTO NO ME SALIO POR EL TEMA QUE TENGO LAS CLASES DIFERENTES POR LO QUE LO VOY A DEJAR ASI

  /*  */

  return (
    <div className="flex items-start mt-4 bg-white p-4 rounded-lg shadow min-h-[120px]">
      <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden relative flex-shrink-0">
        <Image
          src={message.user?.photoUrl || "/default.png"}
          alt="Imagen del usuario"
          fill
          priority
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col ml-4 mt-2 flex-grow">
        {" "}
        {/* Agregar flex-grow aquí */}
        <div className="flex items-center">
          <h3 className="font-semibold text-md">{message.user.name}</h3>
          <div className="text-md ml-2 text-gray-600 cursor-pointer">
            @
            <Link href={`/users/${message.user.username}`}>
              {message.user.username}
            </Link>
          </div>
        </div>
        {/* Mensaje con Link */}
        <p className="mt-2">
          <Link
            href={`/messages/${message.id}`}
            className="text-500 hover:underline"
          >
            {message.message}
          </Link>
        </p>
        {/* Contenedor de respuestas */}
        <div className="flex justify-end mt-2 text-gray-500 text-sm">
          {typeof message.repliesCount === "number" ? (
            <RepliesCounter
              count={message.repliesCount}
              onClick={() => router.push(`/messages/${message.id}`)}
            />
          ) : (
            <div className="h-5">{/* Espacio reservado */}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
