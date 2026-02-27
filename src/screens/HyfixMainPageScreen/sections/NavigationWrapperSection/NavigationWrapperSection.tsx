import { Link, useLocation } from "react-router-dom";

export const NavigationWrapperSection = (): JSX.Element => {
  const location = useLocation();

  const isDarkPage =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/contact";

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-auto z-50 px-2 sm:px-4 lg:px-6 xl:px-8 pt-4">
      <nav
        className={`relative w-full max-w-[1920px] lg:max-w-[2200px] xl:max-w-[2560px] 2xl:max-w-[2880px] mx-auto h-auto min-h-[64px] md:min-h-[88px] md:py-2 px-5 md:px-6 lg:px-8 xl:px-10 rounded-2xl translate-y-[-1rem] animate-fade-in opacity-0 transition-colors duration-300 ${
          isDarkPage
            ? "bg-transparent"
            : "bg-white/70 backdrop-blur-sm shadow-md hover:bg-white focus-within:bg-white hover:shadow-lg focus-within:shadow-lg"
        }`}
      >
        <div className="w-full h-full flex items-center justify-between py-2 md:py-0">
          <Link to="/home">
            <img
              className={`w-[112px] h-[35px] md:w-[160px] md:h-[51px] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-300 ${
                isDarkPage ? "brightness-0 invert" : ""
              }`}
              alt="HYFIX Logo"
              src="/hyfix_logo_updated.png"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
