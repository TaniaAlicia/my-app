import { Meta, StoryObj } from "@storybook/react";
import Menu from "@/app/components/menu/Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    links: [
      { title: "Inicio", href: "/" },
      { title: "Explorar", href: "/" },
      { title: "Perfil", href: "/" },
    ],
  },
};
