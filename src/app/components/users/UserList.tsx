import React, { useState } from "react";
import exploreApi from "../../../services/explore/explore.service";
import InfiniteScroll from "react-infinite-scroll-component";
import {TrendingUserType, UserType} from "../../../types/user.types";
import { PageType } from "@/types/pagination.types";
import UserCard, { UserCardLayout } from "@/app/components/users/UserCard";



type UserListProps = {
    initialUserPage: PageType<TrendingUserType>;
}

const  UserList = ({initialUserPage}:UserListProps) => {
    const [page, setPage] = useState<PageType<TrendingUserType>>({
        ...initialUserPage,
        content: initialUserPage.content.map(user => ({ ...user, count: 0 })),
    });
    const [users, setUsers] = useState<Array<TrendingUserType>>(
        Array.isArray(initialUserPage.content)
            ? initialUserPage.content.map(user => ({ ...user, count: 0 }))
            : []
    );
    
    const fetchData = async () => {
            const pageNumber = page.pagination.page + 1;
            const response = await exploreApi.getFollowRecomendations(pageNumber,5)
            if (response) {
                setPage(response);
            }
            if (response && response.content) {
                setUsers([...users, ...response.content]);
            }
            
        }
    
        const refresh = async () => {
            const response = await exploreApi.getFollowRecomendations(0, 5);
            if (response) {
                setPage(response);
            }
            if (response && response.content) {
                setUsers([...response.content]);
            }
        }
      

  return (
  <InfiniteScroll
      dataLength={users.length}
        next={fetchData}
        hasMore={!page.pagination.last}
        loader={<h4>Cargando más mensajes...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>¡Ups! Has llegado al final</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>
            &#8595; Arrastra hacia abajo para refrescar
          </h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Suelta para refrescar</h3>
        }
      >
        {users.map((user,index) => 
    
    <UserCard key={`explore-user-${index}`} user={user} index={index} layout={UserCardLayout.VERTICAL} />
    )}
       
    
      </InfiniteScroll>
  
        )
  
 
};

export default UserList;