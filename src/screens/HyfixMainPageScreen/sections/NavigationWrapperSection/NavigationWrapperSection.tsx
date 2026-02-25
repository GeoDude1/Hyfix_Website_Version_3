import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", path: "/home" },
  { label: "Applications", path: "/applications" },
  { label: "About", path: "/about" },
];

export const NavigationWrapperSection = (): JSX.Element => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-auto z-50 px-4 pt-4">
      <nav className="relative w-full max-w-[1920px] mx-auto h-auto md:min-h-[88px] md:py-2 px-5 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md translate-y-[-1rem] animate-fade-in opacity-0 border border-white/50 transition-colors duration-300 hover:bg-white focus-within:bg-white hover:border-gray-100 focus-within:border-gray-100 hover:shadow-lg focus-within:shadow-lg">
        <div className="w-full py-2 md:py-0 md:h-full">
          <div className="hidden md:grid md:grid-cols-3 items-center h-full">
            {/* Logo - Left (dark on white) */}
            <div className="flex justify-start">
              <Link to="/home">
                <img
                  className="w-[200px] h-[64px] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  alt="HYFIX Logo"
                  src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
                />
              </Link>
            </div>

            {/* Navigation - Center (dark text) */}
            <div className="flex items-center justify-center gap-8 lg:gap-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`[font-family:'Hind',Helvetica] text-sm lg:text-base tracking-[0.5px] leading-[normal] transition-all cursor-pointer relative group no-underline ${
                    location.pathname === item.path 
                      ? "font-semibold text-gray-900" 
                      : "font-normal text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-[-8px] left-0 h-[2px] bg-gray-900 transition-all ${
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Buttons - Right */}
            <div className="flex items-center justify-end gap-4">
              <Button
                className="h-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 [font-family:'Hind',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] transition-all hover:bg-gray-800"
                onClick={() => window.location.href = "https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg"}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile: logo + hamburger */}
          <div className="flex md:hidden items-center justify-between min-h-[56px]">
            <Link to="/home" onClick={closeMobileMenu}>
              <img
                className="w-[140px] h-[44px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                alt="HYFIX Logo"
                src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
              />
            </Link>
            <button
              type="button"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 aria-expanded={mobileMenuOpen}"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu panel (hamburger dropdown) */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              mobileMenuOpen ? "max-h-[320px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 pb-3 border-t border-gray-100 pt-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`[font-family:'Hind',Helvetica] text-base py-3 px-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "font-semibold text-gray-900 bg-gray-100"
                      : "font-normal text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  className="w-full h-auto py-3 rounded-lg bg-gray-900 [font-family:'Hind',Helvetica] font-medium text-white text-base"
                  onClick={() => {
                    closeMobileMenu();
                    window.location.href = "https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg";
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
};
