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

export const SectionNodeComponentSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent">
      <div className="relative w-full bg-[#e8e8e8]">
        <div className="flex flex-col items-center justify-center gap-6 px-4 py-10">
          <img
            className="w-[257px] h-[79px] object-contain translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
            alt="Final FILE HYFIX"
            src="/hyfix_logo_updated.png"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <p className="[font-family:'Hind',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]">
              Ready to learn more ?
            </p>
<Button
            variant="outline"
            className="h-auto px-[35px] py-[7px] rounded-[5px] border-black hover:bg-black hover:text-white transition-colors"
            onClick={() => window.location.href = "https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg"}
          >
            <span className="[font-family:'Hind',Helvetica] font-medium text-[17px] tracking-[0] leading-[normal]">
              Learn More
            </span>
          </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 [font-family:'Hind',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <span className="[font-family:'Hind',Helvetica] font-bold">
              SOCIAL:
            </span>
            {socialLinks.map((link, index) => (
              <span key={link.name} className="flex items-center gap-2">
                {index > 0 && <span>|</span>}
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline hover:no-underline transition-all"
                >
                  {link.name}
                </a>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 [font-family:'Hind',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center gap-2">
                {index > 0 && <span>|</span>}
                <a href={link.url} rel="noopener noreferrer" target="_blank" className="hover:underline transition-all">
                  {link.name}
                </a>
              </span>
            ))}
          </div>

          <p className="[font-family:'Hind',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            © HYFIX.AI 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
