import ExploreTrending from "@/app/components/explore/ExploreTrending";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof ExploreTrending> = {
  title: "Components/ExploreTrending",
  component: ExploreTrending,
  tags: ["autodocs"],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ExploreTrending>;

export const Default: Story = {
  args: {
    hashes: [{
        hash: "Tatooine",
        count: 2,
        }, {
        hash: "Fuerza",
        count: 1,
        }, {
        hash: "Jedi",
        count: 1,
    }],
  },
};

export const Empty: Story = {
  args: {
    hashes: [],
  },
};
