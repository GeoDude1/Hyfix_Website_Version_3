import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const NavigationWrapperSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  // Transparent mode on dark pages (homepage + contact)
  const isDarkPage =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/contact";

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-auto z-50 px-4 pt-4">
      <nav
        className={`relative w-full max-w-[1920px] mx-auto h-auto min-h-[64px] md:min-h-[88px] md:py-2 px-5 rounded-2xl translate-y-[-1rem] animate-fade-in opacity-0 transition-colors duration-300 ${
          isDarkPage
            ? "bg-transparent"
            : "bg-white/70 backdrop-blur-sm shadow-md hover:bg-white focus-within:bg-white hover:shadow-lg focus-within:shadow-lg"
        }`}
      >
        <div className="w-full h-full flex items-center justify-between py-2 md:py-0">
          {/* Logo - Left */}
          <Link to="/home">
            <img
              className={`w-[140px] h-[44px] md:w-[200px] md:h-[64px] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-300 ${
                isDarkPage ? "brightness-0 invert" : ""
              }`}
              alt="HYFIX Logo"
              src="/hyfix_logo_updated.png"
            />
          </Link>

          {/* Contact Button - Right */}
          <Button
            className={`h-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg [font-family:'Hind',Helvetica] font-medium text-base tracking-[0] leading-[normal] transition-all ${
              isDarkPage
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};
