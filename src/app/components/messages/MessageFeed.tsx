"use client";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Message from "./Message";
import messageApi from "@/services/messages/messages.services";

type MessageFeedProps = {
  initialMessages: PageType<MessageType>;
};

const MessageFeed = ({ initialMessages }: MessageFeedProps) => {

    const [messages, setMessages] = React.useState<PageType<MessageType>>(initialMessages);
    const [messageResponse, setMessageResponse] = React.useState<PageType<MessageType>>(initialMessages);
    const [hashMore, setHashMore] = React.useState<boolean>(!initialMessages.pagination.last);

    const fetchData = async () => {
        const page = messageResponse.pagination.page + 1;
        const response = await messageApi.getMessagesFeed(page,10)
        if (response) {
            setMessageResponse(response);
        }
        if (response && response.content) {
            setMessages({
                ...messages,
                content: [...messages.content, ...response.content],
                pagination: response.pagination,
            });
        }
        setHashMore(response ? !response.pagination.last : false);
    }

    const refresh = async () => {
        const response = await messageApi.getMessagesFeed(0, 10);
        if (response) {
            setMessageResponse(response);
        }
        if (response && response.content) {
            setMessages({
                ...messages,
                content: [...response.content],
                pagination: response.pagination,
            });
        }
    }

  return (
    <InfiniteScroll
    dataLength={messages.content.length}
      next={fetchData}
      hasMore={hashMore}
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
      {messages.content.map((msg: MessageType, index: number) => (
        <Message key={index} message={msg} />
      ))}
    </InfiniteScroll>
  );
};

export default MessageFeed;
