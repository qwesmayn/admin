import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../static/Vector (10).svg";
import hand from "../static/waving-hand_1f44b 1.png";
import avatar from "../static/avatar.svg";
import password from "../static/password.svg";
import stars from "../static/stars.png";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    mode: "onChange"
  });
  const [focusedLogin, setFocusedLogin] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const onSubmit = (data : any) => {
    console.log(data);
  };

  const handleBlur = async (fieldName : any) => {
    await trigger(fieldName);
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-1 flex-col items-center px-6 py-[60px] lg:px-0 bg-[#090314] border-[1px] border-[#160F24]">
        <div className="absolute top-0 w-full h-full from-transparent to-[#8F00FF] bg-radial-gradient-top"></div>

        <div className="absolute top-10 left-1/6 z-20">
          <img src={stars} alt="stars" />
        </div>
        <div className="w-full border-b-[1px] border-[#160F24] z-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm z-10 pb-[147px]">
            <img
              className="mx-auto w-[150px] h-[150px] object-none"
              src={logo}
              alt="Your Company"
            />
          </div>
        </div>

        <div className="absolute top-[280px] z-50 sm:w-full sm:max-w-[530px]  pt-[45px] pb-[30px] px-[10px] bg-custom-gradient_main rounded-3xl border-[1px] border-[#160F24] sm:px-[30px]">
          <div className="flex items-start mb-6 justify-center flex-wrap  sm:items-center">
            <img src={hand} alt="hello" className="mr-0 sm:mr-3" />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#F3E7FF]">
              Добро пожаловать в GAMBLER
            </h2>
          </div>
          <div className="text-center mb-[34px]">
            <span className="text-[16px] text-[#F3E7FF40;]">
              Для входа в панель авторизуйтесь
            </span>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mt-2 flex justify-center items-center">
                <img
                  src={avatar}
                  alt="login"
                  className={`py-[20.5px] px-[24px] border-y-[1px] border-l-[1px] bg-[#0D0718] ${errors.login ? 'border-red-500' : (focusedLogin ? 'border-[#925FFF]' : "border-[#160F24]")}  rounded-l-lg transition-colors duration-300`}
                />
                <input
                  id="login"
                  type="login"
                  autoComplete="login"
                  placeholder="Введите логин"
                  required
                  {...register("login", { required: true })}
                  onFocus={() => setFocusedLogin(true)}
                  onBlur={() => {
                    setFocusedLogin(false);
                    handleBlur("login");
                  }}
                  className={`block w-full border-[1px] border-[#160F24] py-5 px-4 bg-[#0D0718] text-white shadow-sm placeholder-[#F3E7FF40] focus:border-[#925FFF] sm:text-base sm:leading-6 transition-colors duration-300 outline-none rounded-r-lg ${errors.login ? 'border-red-500' : ''}`}
                />
              </div>
            </div>

            <div>
              <div className="mt-2 flex justify-center items-center">
                <img
                  src={password}
                  alt="password"
                  className={`py-[23px] px-[24px] border-y-[1px] border-l-[1px] bg-[#0D0718] ${errors.password ? 'border-red-500' : (focusedPassword ? 'border-[#925FFF]' : "border-[#160F24]")} rounded-l-lg transition-colors duration-300`}
                />
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Введите пароль"
                  required
                  {...register("password", { required: true })}
                  onFocus={() => setFocusedPassword(true)}
                  onBlur={() => {
                    setFocusedPassword(false);
                    handleBlur("password");
                  }}
                  className={`block w-full border-[1px] border-[#160F24] py-5 px-4 bg-[#0D0718] text-white shadow-sm placeholder-[#F3E7FF40] focus:ring-0 focus:border-[#925FFF] sm:text-base sm:leading-6 transition-colors duration-300 outline-none rounded-r-lg input-field ${errors.password ? 'border-red-500' : ''}`}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-custom-gradient px-3 py-5 text-lg font-extrabold leading-6 text-[#E9DFFF] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ВОЙТИ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
