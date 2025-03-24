import Link from "next/link";
import { TrendingUserType } from "@/types/user.types";
import UserCard from "../users/UserCard";
import {UserCardLayout} from "../users/UserCard";

type ExploreUsersProps = {
  users: TrendingUserType[];
};

const ExploreUsers = ({ users }: ExploreUsersProps) => {
  if (!users || users.length === 0) return null; // Cambiado a null para no renderizar nada si no hay hashes

  return (
    <div className="bg-gray-200 rounded-lg px-8 py-4 w-full">
      <h2 className="mb-4 font-semibold text-lg">A quien seguir</h2>
      {users.slice(0, 4).map((user, index) => (
       <UserCard layout={UserCardLayout.VERTICAL} key={`trending-user-${index}`} user={user} index={0} />
      ))}
      {users.length > 3 && (
        <Link href="/explore?type=USERS">
          <div className="link-primary">Ver más</div>
        </Link>
      )}
    </div>
  );
};

export default ExploreUsers;
