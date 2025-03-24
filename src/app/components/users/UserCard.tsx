import { TrendingUserType, UserType } from "@/types/user.types";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export enum UserCardLayout {
  HORIZONTAL,
  VERTICAL,
}

const divClases = {
  [UserCardLayout.HORIZONTAL]: "flex",
  [UserCardLayout.VERTICAL]: "flex flex-col",
};

const LinkClases = {
  [UserCardLayout.HORIZONTAL]: "ml-2 text-sm text-gray-600 hover:underline",
  [UserCardLayout.VERTICAL]: "text-sm text-gray-600 hover:underline",
};

type UserCardProps = PropsWithChildren & {
  user: TrendingUserType | UserType;
  index: number;
  layout: UserCardLayout;
};

const UserCard = ({ user, layout, children }: UserCardProps) => {
  return (
    <div className="mb-4 grid grid-cols-[auto_1fr] gap-4 items-center gap-4">
      {/* Avatar circular */}
      <div className="w-10 h-10 relative">
        <Image
          src={user.photoUrl}
          alt={user.name}
          fill
          priority
          className="rounded-full object-cover"
        />
      </div>

      {/* Nombre y username */}
      <div className={divClases[layout]}>
        <h3 className="font-semibold text-md leading-tight">{user.name}</h3>
        <Link
          href={`/users/${user.username}`}
          className={LinkClases[layout]}
        >
          @{user.username}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default UserCard;
