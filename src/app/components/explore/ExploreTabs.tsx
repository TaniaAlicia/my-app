
'use client';
import { TrendingUserType } from "@/types/user.types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TrendingHashtag } from "@/types/hash.types";

import Link from "next/link";
import UserList from "../users/UserList";
import { PageType } from "@/types/pagination.types";
import MessageHashTagList from "../messages/MessageHashTagList";


enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hashtags: PageType<TrendingHashtag>;
  users: PageType<TrendingUserType>;
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
        {tab=== TabView.HASHTAGS && <MessageHashTagList initialPage={hashtags} />}
        {tab === TabView.USERS && <UserList initialUserPage={users}/>}
      </div>
    </>
  );
}

export default ExploreTabs;
