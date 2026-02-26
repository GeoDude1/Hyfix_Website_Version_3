import { Button } from "../../../../components/ui/button";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

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

export const FooterSection = (): JSX.Element => {
  const logoRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const socialRef = useScrollAnimation();
  const legalRef = useScrollAnimation();
  const copyrightRef = useScrollAnimation();

  return (
    <footer className="relative w-full bg-transparent">
      <div className="relative w-full h-[310px] bg-[#e8e8e8]">
        <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
          <img
            ref={logoRef}
            className="w-[257px] h-[79px] object-contain"
            alt="HYFIX Logo"
            src="/hyfix_logo_updated.png"
          />

          <div ref={ctaRef} className="flex items-center gap-4">
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

          <div ref={socialRef} className="flex items-center gap-2">
            <span className="[font-family:'Hind',Helvetica] font-bold text-black text-[17px] tracking-[0] leading-[normal]">
              SOCIAL:
            </span>
            {socialLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="[font-family:'Hind',Helvetica] text-black text-[17px]">
                    |
                  </span>
                )}
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="[font-family:'Hind',Helvetica] text-black text-[17px] tracking-[0] leading-[normal] underline hover:no-underline transition-all"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          <div ref={legalRef} className="flex items-center gap-2">
            {legalLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="[font-family:'Hind',Helvetica] text-black text-[17px]">
                    |
                  </span>
                )}
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="[font-family:'Hind',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] hover:underline transition-all"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          <p ref={copyrightRef} className="[font-family:'Hind',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal]">
            © HYFIX.AI 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
