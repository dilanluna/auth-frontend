import{w as c,u as t}from"./index.f5b9952b.js";import{S as s,__tla as d}from"./signup-form.0d69bef3.js";import{j as u}from"./jsx-runtime.42bcc058.js";import{__tla as w}from"./iframe.c294021b.js";import"./index.3b7eb7b1.js";import"./instrumenter.09b6e0de.js";import"./es.map.constructor.9601eaa1.js";import"./label.bef12c73.js";import"./clsx.m.256e9345.js";import"./button.e3e692d4.js";import"./index.esm.0f5df346.js";let i,r,l,m,f=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return w}catch{}})()]).then(async()=>{var p=Object.defineProperty,y=(o,e)=>p(o,"name",{value:e,configurable:!0});let n;m={parameters:{storySource:{source:`import { userEvent, within } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignupForm from './signup-form';

export default {
  title: 'Auth/Signup Form',
  component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (props) => (
  <SignupForm
    {...props}
    onSubmit={(data) => window.alert(JSON.stringify(data))}
  />
);

export const Empty = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = {
    id: '455255270',
    firstname: 'Ken',
    lastname: 'Mcdonald',
    phone: '560 936 9577',
    email: 'kemcd256@safetymail.info',
    password: '08zo7mh240q',
  };

  // user fills form
  await userEvent.type(canvas.getByLabelText('Firstname'), user.firstname);
  await userEvent.type(canvas.getByLabelText('Lastname'), user.lastname);
  await userEvent.type(canvas.getByLabelText('ID'), user.id);
  await userEvent.type(canvas.getByLabelText('Phone'), user.phone);
  await userEvent.type(canvas.getByLabelText('Email'), user.email);
  await userEvent.type(canvas.getByLabelText('Password'), user.password);
  await userEvent.type(
    canvas.getByLabelText('Confirm Password'),
    user.password,
  );
  await userEvent.click(canvas.getByLabelText(/terms and conditions/i));
};
`,locationsMap:{empty:{startLoc:{col:52,line:10},endLoc:{col:1,line:15},startBody:{col:52,line:10},endBody:{col:1,line:15}},filled:{startLoc:{col:52,line:10},endLoc:{col:1,line:15},startBody:{col:52,line:10},endBody:{col:1,line:15}}}}},title:"Auth/Signup Form",component:s},n=y(o=>u(s,{...o,onSubmit:e=>window.alert(JSON.stringify(e))}),"Template"),i=n.bind({}),r=n.bind({}),r.play=async({canvasElement:o})=>{const e=c(o),a={id:"455255270",firstname:"Ken",lastname:"Mcdonald",phone:"560 936 9577",email:"kemcd256@safetymail.info",password:"08zo7mh240q"};await t.type(e.getByLabelText("Firstname"),a.firstname),await t.type(e.getByLabelText("Lastname"),a.lastname),await t.type(e.getByLabelText("ID"),a.id),await t.type(e.getByLabelText("Phone"),a.phone),await t.type(e.getByLabelText("Email"),a.email),await t.type(e.getByLabelText("Password"),a.password),await t.type(e.getByLabelText("Confirm Password"),a.password),await t.click(e.getByLabelText(/terms and conditions/i))},l=["Empty","Filled"]});export{i as Empty,r as Filled,l as __namedExportsOrder,f as __tla,m as default};
//# sourceMappingURL=signup-form.stories.07c80604.js.map
