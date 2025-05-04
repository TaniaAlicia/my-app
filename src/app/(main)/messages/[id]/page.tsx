import Message from "../../../components/messages/Message";
import messageApi from "../../../../services/messages/messages.services";
import PostBox from "@/app/components/utils/PostBox";
import userApi from "../../../../services/users/users.service";

const MessagesPage = async ({ params }: { params: { id: string } }) => {
  const repliesPagePromise = messageApi.getMessageReplies(params.id, 0, 10);
  const messagePromise = messageApi.getMessage(params.id);

  const [message, repliesPage] = await Promise.all([
    messagePromise,
    repliesPagePromise,
  ]);

  // Obtener la foto del usuario (puedes cambiar 'ObiWan' por un valor dinámico si lo prefieres)
    const photoUrl = await userApi.getUserPhoto("ObiWan");

  return (
    <div className="flex flex-col p-8 bg-gray-100 rounded-lg shadow-md">
      <section className="flex flex-col mb-8 ">
        {message && <Message message={message} />}
      </section>
      <section>
      {photoUrl && <PostBox parentId={params.id} />}
      </section>
      <section className="flex flex-col gap-4">
        {repliesPage?.content?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </section>
    </div>
  );
};

export default MessagesPage;
