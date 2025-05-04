// src/app/page.tsx (o donde tengas tu IndexPage)

import { MessageType } from "@/types/message.types";
import messageApi from "@/services/messages/messages.services";
import MessageFeed from "../components/messages/MessageFeed";
import { PageType } from "@/types/pagination.types";
import PostBox from "../components/utils/PostBox";

import userApi from "../../services/users/users.service";

const IndexPage = async () => {
  

  // Obtener los mensajes iniciales
  const messageResponse: PageType<MessageType> = {
    content: (await messageApi.getMessagesFeed(0, 10))?.content || [],
    pagination: (await messageApi.getMessagesFeed(0, 10))?.pagination || {
      totalElements: 0,
      totalPages: 0,
      page: 0,
      size: 10,
      first: true,
      last: true,
    },
    length: 0,
  };

  // Obtener la foto del usuario (puedes cambiar 'ObiWan' por un valor dinámico si lo prefieres)
  const photoUrl = await userApi.getUserPhoto("ObiWan");

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        {photoUrl && <PostBox user={{ username: "ObiWan", photoUrl }} />}
        <MessageFeed initialMessages={messageResponse} />
      </section>
    </main>
  );
};

export default IndexPage;
