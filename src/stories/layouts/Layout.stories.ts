import { Meta, StoryObj } from "@storybook/react";
import UsersLayout from "@/app/(main)/layout";
import React, { ReactNode } from "react";

const meta: Meta<typeof UsersLayout> = {
  title: "Layout/Users",
  component: UsersLayout,
  tags: ["autodocs"],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof UsersLayout>;

const links = [
  { title: "Inicio", href: "/" },   
    { title: "Explorar", href: "/" },
    { title: "Perfil", href: "/" },
];

export const Primary: Story = {
    args: {
        children: null as ReactNode,
      },
};
 

/* import { Meta, StoryObj } from "@storybook/react";
import UsersLayout from "@/app/(main)/layout";
import React, { ReactNode } from "react";

const meta: Meta<typeof UsersLayout> = {
  title: "Layout/Users",
  component: UsersLayout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UsersLayout>;

export const Primary: Story = {
    args: {
      children: (<div>ESTO ES UN CONTENIDO</div>) as ReactNode, // JSX válido, cast a ReactNode
    },
  };
};
 */