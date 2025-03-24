"use client";

import { useEffect, useState } from "react";
import UserTabs from "@/app/components/users/UserTabs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { UserType } from "@/types/user.types";
import { MessageType } from "@/types/message.types";
import userApi from "@/services/users/users.service";
import { PageType } from "@/types/pagination.types";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const [userMessages, setUserMessages] =
    useState<PageType<MessageType> | null>(null);
  const [userReplies, setUserReplies] = useState<PageType<MessageType> | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username && typeof username === 'string') {
      setLoading(true);
      Promise.all([
        userApi.getUserData(username),
        userApi.getUserMessages(username),
        userApi.getUserMessagesReplies(username),
      ])
        .then(([userData, userMessages, userReplies]) => {
          if (userData) setUser(userData);
          if (userMessages) setUserMessages(userMessages);
          if (userReplies) setUserReplies(userReplies);
        })
        .catch((error) => console.error("Error fetching user data:", error))
        .finally(() => setLoading(false));
    } else {
      console.error("El nombre de usuario es inválido:", username);
      setLoading(false);
    }
  }, [username]);

  if (loading) return <div>Cargando...</div>;
  if (!user) return <div>Error cargando el usuario</div>;

  return (
    <main className="flex flex-col bg-gray-200 p-4">
      <section className="flex flex-col items-center mb-8">
        <div className="rounded-full bg-gray-300 overflow-hidden block relative w-30 h-30 mb-2">
          <Image
            src={user.photoUrl}
            alt="Imagen del usuario"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="font-semibold text-lg mb-2 mt-2">{user.name}</h2>
        <div className="text-md mb-4 text-gray-600">
          @<Link href={`/users/${username}`}>{username}</Link>
        </div>
        <div>{user.bio}</div>
        <div className="flex justify-between mt-4 w-1/2">
          <span className="font-semibold">
            Seguidores: {user.followersCount}
          </span>
          <span className="font-semibold">
            Siguiendo: {user.followingCount}
          </span>
        </div>
      </section>
      <UserTabs
        messages={userMessages ? userMessages.content : []}
        replies={userReplies ? userReplies.content : []}
      />
    </main>
  );
};

export default UserPage;