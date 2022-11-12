import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          quisquam distinctio quibusdam eligendi corrupti saepe enim ab, ipsa
          eius magni animi beatae aspernatur voluptates repudiandae iure libero
          exercitationem nesciunt sequi!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
