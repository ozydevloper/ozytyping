import Card from './Card';
import StartLandingPage from './StartLandingPage';

const LandingPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-[13rem]">
      <div className="mb-2 text-[2rem] font-bold">
        <h1>Hi, Welcome!</h1>
      </div>
      <div className="text-[0.9rem] text-center mb-10">
        <p className="w-[15rem] font-light text-slate-300">
          Ayo cek sudah sejauh mana atau secepat apa anda mengetik!
        </p>
        <span className="text-slate-500 text-md">
          Turn off auto translate Please!
        </span>
      </div>
      <StartLandingPage />
      <Card />
    </div>
  );
};

export default LandingPage;
