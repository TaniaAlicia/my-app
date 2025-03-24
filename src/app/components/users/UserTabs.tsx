import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";

enum TabView {
  MESSAGES,
  REPLIES,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};

const UserTabs = ({ messages, replies }: UserTabsProps) => {
    const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="flex justify-evenly mt-4 mb-8 ">
        <div className={`cursor-pointer  ${tab === TabView.MESSAGES ? 'border-b-4 border-blue-400' : ''}`} onClick={() => setTab(TabView.MESSAGES)}>
          Mensajes
        </div>
        <div className={`cursorpointer ${tab === TabView.REPLIES ? ' border-b-4 border-blue-400' : ''}`} onClick={()=>setTab(TabView.REPLIES)} >Respuestas</div>
      </div>
      <div>
        {tab=== TabView.MESSAGES && messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {tab === TabView.REPLIES && replies.map((reply, index) => (
          <Message key={index} message={reply} />
        ))}
      </div>
    </>
  );
};

export default UserTabs;

