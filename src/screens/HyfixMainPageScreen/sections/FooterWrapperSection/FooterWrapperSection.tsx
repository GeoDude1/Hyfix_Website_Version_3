import { Button } from "../../../../components/ui/button";

const socialLinks = [
  { name: "X", url: "https://x.com/hyfixai" },
  { name: "YouTube", url: "https://www.youtube.com/@HYFIXAI" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/hyfix" },
];

const legalLinks = [
  { name: "Terms & Conditions", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Terms_Conditions_2025.pdf?v=1765307120" },
  { name: "Privacy Policy", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/GEODNET_HYFIX_Privacy_Policy_8f4c53f1-3980-4f64-9bbe-4af146dde45a.pdf?v=1761165629" },
  { name: "Refund Policy", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Return_Policy_Nov_2025.pdf?v=1763068073" },
];

export const FooterWrapperSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="w-full bg-gray-100 py-10 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
              <img
                className="w-[220px] h-[68px] object-contain opacity-0 animate-fade-in [--animation-delay:0ms] hover:opacity-90 transition-opacity duration-300"
                alt="HYFIX Logo"
                src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
              />
              <p className="[font-family:'Hind',Helvetica] font-normal text-gray-700 text-[17px] tracking-[0] leading-relaxed">
                Ready to learn more?
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="w-fit h-auto px-6 py-2.5 rounded-lg border-gray-800 hover:bg-gray-800 hover:text-white transition-colors [font-family:'Hind',Helvetica] font-medium text-[15px]"
                  onClick={() => window.location.href = "https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg"}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <span className="[font-family:'Hind',Helvetica] font-bold text-gray-900 text-[15px] tracking-wide uppercase">
                Social
              </span>
              <div className="flex flex-wrap gap-4 [font-family:'Hind',Helvetica] text-gray-700 text-[15px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline hover:no-underline hover:text-gray-900 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="[font-family:'Hind',Helvetica] font-bold text-gray-900 text-[15px] tracking-wide uppercase">
                Legal
              </span>
              <div className="flex flex-col gap-2 [font-family:'Hind',Helvetica] text-gray-700 text-[15px]">
                {legalLinks.map((link) => (
                  <a key={link.name} href={link.url} rel="noopener noreferrer" target="_blank" className="hover:underline hover:text-gray-900 transition-all w-fit">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-300">
            <p className="[font-family:'Hind',Helvetica] font-normal text-gray-600 text-[15px] tracking-[0] leading-[normal]">
              © HYFIX.AI 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
