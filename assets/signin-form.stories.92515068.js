import{w as v,u as p}from"./index.f5b9952b.js";import{p as _,__tla as E}from"./iframe.c294021b.js";import{I as c,L as y}from"./label.bef12c73.js";import{B as F}from"./button.e3e692d4.js";import{u as x,n as N,s as f,F as u}from"./index.esm.0f5df346.js";import{a as o,j as e}from"./jsx-runtime.42bcc058.js";import"./index.3b7eb7b1.js";import"./instrumenter.09b6e0de.js";import"./es.map.constructor.9601eaa1.js";import"./clsx.m.256e9345.js";let g,l,h,w,T=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{var S=Object.defineProperty,m=(t,i)=>S(t,"name",{value:i,configurable:!0});const r=await _(()=>import("./joi-browser.min.4e553f62.js").then(t=>t.j),[]),b=r.object({email:r.string().trim().email({tlds:{allow:!1}}).required().label("email"),password:r.string().trim().required().label("password")}).messages({"string.empty":"{#label} is a required field"});function n({onSubmit:t}){const{register:i,handleSubmit:a,formState:{errors:d}}=x({shouldUseNativeValidation:!0,resolver:N(b)});return o("form",{onSubmit:a(t),children:[o("div",{className:"grid grid-col-1 gap-y-8",children:[e("div",{className:"col-span-1",children:o("div",{className:"relative",children:[e(c,{id:"email",type:"email",autoComplete:"email",...i("email"),placeholder:"Enter your email"}),e(y,{htmlFor:"email",className:"absolute left-2 -top-3 bg-white px-2",children:"Email"}),e(f,{name:"email",errors:d,render:u})]})}),e("div",{className:"col-span-1",children:o("div",{className:"relative",children:[e(c,{id:"password",type:"password",...i("password"),autoComplete:"current-password",placeholder:"Enter your password"}),e(y,{htmlFor:"password",className:"absolute left-2 -top-3 bg-white px-2",children:"Password"}),e(f,{name:"password",errors:d,render:u})]})})]}),e("div",{className:"text-center mt-9",children:e(F,{type:"submit",children:"Sign in"})})]})}m(n,"SigninForm");try{signinform.displayName="signinform",signinform.__docgenInfo={description:"",displayName:"signinform",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: SigninUser) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/auth/signin/signin-form.tsx#signinform"]={docgenInfo:signinform.__docgenInfo,name:"signinform",path:"src/auth/signin/signin-form.tsx#signinform"})}catch{}let s;w={parameters:{storySource:{source:`import { userEvent, within } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SigninForm from './signin-form';

export default {
  title: 'Auth/Signin Form',
  component: SigninForm,
} as ComponentMeta<typeof SigninForm>;

const Template: ComponentStory<typeof SigninForm> = (props) => (
  <SigninForm
    {...props}
    onSubmit={(data) => window.alert(JSON.stringify(data))}
  />
);

export const Empty = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const user = {
    email: 'kemcd256@safetymail.info',
    password: '08zo7mh240q',
  };

  // user fills form
  await userEvent.type(canvas.getByLabelText('Email'), user.email);
  await userEvent.type(canvas.getByLabelText('Password'), user.password);
};
`,locationsMap:{empty:{startLoc:{col:52,line:10},endLoc:{col:1,line:15},startBody:{col:52,line:10},endBody:{col:1,line:15}},filled:{startLoc:{col:52,line:10},endLoc:{col:1,line:15},startBody:{col:52,line:10},endBody:{col:1,line:15}}}}},title:"Auth/Signin Form",component:n},s=m(t=>e(n,{...t,onSubmit:i=>window.alert(JSON.stringify(i))}),"Template"),g=s.bind({}),l=s.bind({}),l.play=async({canvasElement:t})=>{const i=v(t),a={email:"kemcd256@safetymail.info",password:"08zo7mh240q"};await p.type(i.getByLabelText("Email"),a.email),await p.type(i.getByLabelText("Password"),a.password)},h=["Empty","Filled"]});export{g as Empty,l as Filled,h as __namedExportsOrder,T as __tla,w as default};
//# sourceMappingURL=signin-form.stories.92515068.js.map
