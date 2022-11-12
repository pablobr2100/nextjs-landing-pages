import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Cumque tempora quae fuga soluta facilis
    repudiandae quaerat voluptatum recusandae minima nesciunt?
    Nulla fuga veniam eum beatae atque provident qui harum debitis.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
