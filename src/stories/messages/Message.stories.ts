import { Meta, StoryObj } from "@storybook/react";
import Message from "@/app/components/messages/Message";
import { MessageType } from "@/types/message.types";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

const sampleMessage: MessageType = {
    name: "John Doe",
    username: "johndoe",
    message: "Hello, this is a sample message!",
    repliesCount: 0
};

export const Default: Story = {
  args: {
    message: sampleMessage,
  },
};