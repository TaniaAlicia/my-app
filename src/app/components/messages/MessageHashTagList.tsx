import type { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import exploreApi from "../../../services/explore/explore.service"; // Adjust the path as needed
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MessageHashtags from "./MessageHashtags";

type MessageHashTagListProps = {
  initialPage: PageType<TrendingHashtag>;
};

const MessageHashTagList = ({initialPage}: MessageHashTagListProps) => {
  const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage);

  const [hashtags, setHashtags] = useState<TrendingHashtag[]>(initialPage.content);

  const fetchData = async () => {
    const pageNumber = page.pagination.page + 1;
    const response = await exploreApi.getTrendingHashtag(pageNumber, 10);
    if (response) {
      setPage(response);
    }
    if (response && response.content) {
      setHashtags([...hashtags, ...response.content]);
    }
  };

  const refresh = async () => {
    const response = await exploreApi.getTrendingHashtag(0, 10);
    if (response) {
      setPage(response);
    }
    if (response && response.content) {
        setHashtags([...response.content]);
    }
  };
  return (
    <InfiniteScroll
      dataLength={hashtags.length}
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
      {hashtags.map((hash, index) => (
        <MessageHashtags hash={hash} key={`explore-hash-${index}`}/>
      ))}
    </InfiniteScroll>
  );
};

export default MessageHashTagList;
