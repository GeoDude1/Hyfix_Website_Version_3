import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Applications", path: "/applications" },
];

export const ContentDividerSection = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <nav className="w-full h-[70px] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(237,237,237,0.95)_100%)] shadow-sm translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-5 h-full">
          <div className="grid grid-cols-3 items-center h-full">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Link to="/home">
                <img
                  className="w-[180px] h-[55px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  alt="HYFIX Spatial Intelligence"
                  src="/hyfix_logo_updated.png"
                />
              </Link>
            </div>

            {/* Navigation - Center */}
            <div className="flex items-center justify-center gap-[35px]">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`[font-family:'Hind',Helvetica] text-[18px] tracking-[0] leading-[normal] transition-all hover:text-blue-600 cursor-pointer ${
                    location.pathname === item.path ? "font-bold text-black" : "font-medium text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Buttons - Right */}
            <div className="flex items-center justify-end gap-2">
              <Button
                className="h-11 px-6 py-3 rounded-lg border border-solid border-blue-500 bg-gradient-to-b from-blue-500 to-blue-700 [font-family:'Hind',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] transition-transform hover:scale-105"
                onClick={() => window.location.href = "https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg"}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
