// src/components/messages/PostBox.tsx
import Image from "next/image";


const PostBox = ({ user }: { user: any }) => {
  return (
    <div className="flex items-start bg-white p-4 rounded-md shadow-md">
      {/* Avatar */}
      <div className="relative w-10 h-10 mr-4">
        <Image
          src={user.photoUrl}
          alt={user.username}
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Caja de texto */}
      <div className="flex-1">
        <textarea
          placeholder="¿Qué estás pensando?"
          className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={3}
        />
        <div className="flex justify-end mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Postear
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
