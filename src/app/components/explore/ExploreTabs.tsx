
'use client';
import { TrendingUserType } from "@/types/user.types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TrendingHashtag } from "@/types/hash.types";
import UserCard, { UserCardLayout } from "../users/UserCard";
import MessageHashtags from "../messages/MessageHashtags";
import Link from "next/link";


enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hashtags: TrendingHashtag[];
  users: TrendingUserType[];
  initialTab?: string;
};

const ExploreTabs = ({ hashtags, users, initialTab }: ExploreTabsProps) => {
    const searchParams = useSearchParams();
    const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS);

    useEffect(() => {
        setTab(searchParams.get('type') ? TabView[searchParams.get('type') as keyof typeof TabView] : tab);
    }, [searchParams.get('type'), tab]);

  return (
    <>
      <div className="flex justify-evenly mt-4 mb-8 ">
        <Link href="/explore?type=HASHTAGS">
        <div className={`cursor-pointer  ${tab === TabView.HASHTAGS ? 'border-b-4 border-blue-400' : ''}`} onClick={() => setTab(TabView.HASHTAGS)}>
        Hashtags
        </div>
        </Link>
        <Link href="/explore?type=USERS">
          <div className={`cursorpointer ${tab === TabView.USERS ? ' border-b-4 border-blue-400' : ''}`} onClick={()=>setTab(TabView.USERS)} >Usuarios</div>
        </Link>
      </div>
      <div>
        {tab=== TabView.HASHTAGS && hashtags.map((hash, index) => (
          <MessageHashtags hash={hash} key={`explore-hash-${index}`}
          />
        ))}
        {tab === TabView.USERS && users.map((users, index) => (
          <UserCard key={`explore-user-${index}`} user={users} index={0} layout={UserCardLayout.VERTICAL} />
        ))}
      </div>
    </>
  );
};

export default ExploreTabs;
