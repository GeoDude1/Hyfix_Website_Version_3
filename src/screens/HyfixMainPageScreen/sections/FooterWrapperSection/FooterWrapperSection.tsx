export const FooterWrapperSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#f2f3f5] py-10 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Top row: logo + legal links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex items-center gap-4">
              <img
                src="/hyfix_logo_updated.png"
                alt="HYFIX Spatial Intelligence"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>

            <div className="[font-family:'Hind',Helvetica] text-gray-900 text-sm md:text-base text-center md:text-right">
              <p className="font-semibold mb-2">LEGAL</p>
              <div className="flex flex-col gap-1 md:items-end">
                <a
                  href="https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Terms_Conditions_2025.pdf?v=1765307120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Terms & Conditions
                </a>
                <a
                  href="https://cdn.shopify.com/s/files/1/0617/8360/5461/files/GEODNET_HYFIX_Privacy_Policy_8f4c53f1-3980-4f64-9bbe-4af146dde45a.pdf?v=1761165629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Return_Policy_Nov_2025.pdf?v=1763068073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>

          {/* Divider + bottom row */}
          <div className="border-t border-gray-300 pt-4">
            <p className="[font-family:'Hind',Helvetica] text-gray-600 text-[13px] md:text-sm">
              © HYFIX.AI 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
