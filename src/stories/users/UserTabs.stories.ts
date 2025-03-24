import { Meta, StoryObj } from "@storybook/react";
import Message from "@/app/components/messages/Message";
import { MessageType } from "@/types/message.types";
import UserTabs from "@/app/components/users/UserTabs";

const meta: Meta<typeof UserTabs> = {
  title: "Users/UserTabs",
  component: UserTabs,
  tags: ["autodocs"],
    argTypes: {
        messages: { control: "object" },
        replies: { control: "object" },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const messages: MessageType[] = [{
    name: "John Doe",
    username: "johndoe",
    message: "Hello, this is a sample message!",
    repliesCount: 0
},
{
    name: "John Doe",
    username: "johndoe",
    message: "Hello, this is a sample message!",
    repliesCount: 0
},
]

const replies: MessageType[] = [{
    name: "Jane Doe",
    username: "janedoe",
    message: "Hi John, this is a reply!",
    repliesCount: 0
}]


export const MessageTab: Story = {
  args: {
    messages: messages,
    replies : replies,
  },
};