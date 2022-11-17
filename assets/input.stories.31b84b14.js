var d=Object.defineProperty;var t=(e,c)=>d(e,"name",{value:c,configurable:!0});import{I as o,L as p,i as m}from"./label.18e0e6ed.js";import{a as l,j as n,F as b}from"./jsx-runtime.32419ef3.js";import"./clsx.m.256e9345.js";import"./iframe.28da72ae.js";const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{"text-input":{startLoc:{col:51,line:11},endLoc:{col:1,line:23},startBody:{col:51,line:11},endBody:{col:1,line:23}},checkbox:{startLoc:{col:53,line:38},endLoc:{col:1,line:50},startBody:{col:53,line:38},endBody:{col:1,line:50}},radio:{startLoc:{col:53,line:38},endLoc:{col:1,line:50},startBody:{col:53,line:38},endBody:{col:1,line:50}}}}},title:"Components/Input",component:o,subcomponents:{Label:p}},y=t(e=>l("div",{className:"relative",children:[n(o,{...e,id:"field"}),n(p,{htmlFor:"field",className:"absolute left-2 -top-3 bg-white px-2",children:"Label"})]}),"TextTemplate"),a=y.bind({});a.args={type:"text",placeholder:"placeholder"};a.argTypes={type:{options:m,control:{type:"select"}}};const s=t(e=>l(b,{children:[n(o,{...e,id:"field"}),n(p,{htmlFor:"field",className:"font-normal ml-3",children:"Label"})]}),"OptionTemplate"),r=s.bind({});r.args={type:"checkbox"};r.argTypes={type:{table:{disable:!0}}};const i=s.bind({});i.args={type:"radio"};i.argTypes={type:{table:{disable:!0}}};const I=["TextInput","Checkbox","Radio"];export{r as Checkbox,i as Radio,a as TextInput,I as __namedExportsOrder,L as default};
//# sourceMappingURL=input.stories.31b84b14.js.map
