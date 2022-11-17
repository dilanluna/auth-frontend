import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from './label';
import Input, { inputTextTypes } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  subcomponents: { Label },
} as ComponentMeta<typeof Input>;

const TextTemplate: ComponentStory<typeof Input> = (props) => (
  <div className="relative">
    <Input
      {...props}
      id="field"
    />
    <Label
      htmlFor="field"
      className="absolute left-2 -top-3 bg-white px-2">
      Label
    </Label>
  </div>
);

export const TextInput = TextTemplate.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'placeholder',
};

TextInput.argTypes = {
  type: {
    options: inputTextTypes,
    control: { type: 'select' },
  },
};

const OptionTemplate: ComponentStory<typeof Input> = (props) => (
  <>
    <Input
      {...props}
      id="field"
    />
    <Label
      htmlFor="field"
      className="font-normal ml-3">
      Label
    </Label>
  </>
);

export const Checkbox = OptionTemplate.bind({});
Checkbox.args = {
  type: 'checkbox',
};
Checkbox.argTypes = {
  type: {
    table: { disable: true },
  },
};

export const Radio = OptionTemplate.bind({});
Radio.args = {
  type: 'radio',
};
Radio.argTypes = {
  type: {
    table: { disable: true },
  },
};
