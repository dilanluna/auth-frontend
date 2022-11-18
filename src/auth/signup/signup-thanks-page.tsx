import Button from '@/components/button';
import checkIcon from '@/assets/check.svg';
import reactLogo from '@/assets/react.svg';

export default function SignupThanksPage() {
  return (
    <div className="px-6 m-auto max-w-lg">
      <div className="text-center">
        <img
          src={reactLogo}
          alt="React logo"
          className="box-content inline-block p-[1.5em] will-change-[filter] animate-[spin_infinite_20s_linear] h-[6em] hover:drop-shadow-[0_0_2em_#61dafbaa]"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-24 sm:mt-32">
        <img
          src={checkIcon}
          alt="Completed"
          className="mb-8"
        />

        <div className="mb-7">
          <h4 className="text-neutral-600 text-xl font-semibold text-center">
            Thanks for sign up!
          </h4>
          <p className="text-neutral-600 text-center">
            Check your email to enable your account
          </p>
        </div>

        <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-700 text-white font-medium py-[10px] px-4 rounded-md focus:ring focus:ring-blue-500 focus:ring-offset-1 min-w-[205px]">
          Continue
        </Button>
      </div>
    </div>
  );
}
