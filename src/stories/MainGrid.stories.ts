import type { Meta, StoryObj } from '@storybook/react-vite';

import MainGrid from '../components/MainGrid';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/MainGrid',
  component: MainGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    input: { 
      control: 'text',
      description: 'Position input in format "x,y DIRECTION" where x,y are 0-4 and direction is NORTH, SOUTH, EAST, or WEST'
    },
  },
} satisfies Meta<typeof MainGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    input: '1,1 NORTH',
  },
};

export const CenterPosition: Story = {
  args: {
    input: '2,2 EAST',
  },
};

export const TopRightCorner: Story = {
  args: {
    input: '4,4 SOUTH',
  },
};

export const BottomLeftCorner: Story = {
  args: {
    input: '0,0 WEST',
  },
};

export const FacingNorth: Story = {
  args: {
    input: '3,1 NORTH',
  },
};

export const FacingSouth: Story = {
  args: {
    input: '1,3 SOUTH',
  },
};

export const FacingEast: Story = {
  args: {
    input: '0,2 EAST',
  },
};

export const FacingWest: Story = {
  args: {
    input: '4,2 WEST',
  },
};

export const InvalidInput: Story = {
  args: {
    input: 'invalid input',
  },
};

export const OutOfBounds: Story = {
  args: {
    input: '5,5 NORTH',
  },
};