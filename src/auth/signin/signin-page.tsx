import SigninForm from './signin-form';

export default function SigninPage() {
  return (
    <>
      <SigninForm onSubmit={(data) => console.log(data)} />
    </>
  );
}
