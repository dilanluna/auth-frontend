import { useNavigate } from 'react-router-dom';
import SignupForm from './signup-form';
import reactLogo from '../assets/react.svg';

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('thanks');
  };

  return (
    <div className="px-6 m-auto max-w-lg">
      <div className="text-center">
        <img
          src={reactLogo}
          alt="React logo"
          className="box-content inline-block p-[1.5em] will-change-[filter] animate-[spin_infinite_20s_linear] h-[6em] hover:drop-shadow-[0_0_2em_#61dafbaa]"
        />
      </div>
      <h2 className="text-blue-500 text-lg font-bold text-center">
        Get started with your account
      </h2>
      <div className="mt-6 mb-12">
        <SignupForm onSubmit={handleSignup} />
      </div>
    </div>
  );
}
