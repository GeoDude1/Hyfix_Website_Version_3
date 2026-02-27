import { type FormEvent } from "react";
import { motion } from "framer-motion";
import { ScrollToTop } from "../../components/ScrollToTop";
import { NavigationWrapperSection } from "../HyfixMainPageScreen/sections/NavigationWrapperSection";
import { FooterWrapperSection } from "../HyfixMainPageScreen/sections/FooterWrapperSection";

export const ContactPageScreen = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href =
      "https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg";
  };

  return (
    <main className="w-full min-w-0 min-h-screen relative bg-[#0a0a0a]">
      <ScrollToTop />
      <NavigationWrapperSection />

      {/* Main Content */}
      <div className="pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl text-center tracking-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Learn More
          </motion.h1>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* First Name / Last Name row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="[font-family:'Hind',Helvetica] text-white/80 text-sm font-medium block mb-2">
                  First Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white [font-family:'Hind',Helvetica] text-base placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.08] transition-colors"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="[font-family:'Hind',Helvetica] text-white/80 text-sm font-medium block mb-2">
                  Last Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white [font-family:'Hind',Helvetica] text-base placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.08] transition-colors"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="[font-family:'Hind',Helvetica] text-white/80 text-sm font-medium block mb-2">
                Email<span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white [font-family:'Hind',Helvetica] text-base placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.08] transition-colors"
                placeholder="you@company.com"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="[font-family:'Hind',Helvetica] text-white/80 text-sm font-medium block mb-2">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white [font-family:'Hind',Helvetica] text-base placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.08] transition-colors"
                placeholder="Your role"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="[font-family:'Hind',Helvetica] text-white/80 text-sm font-medium block mb-2">
                Company Name<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white [font-family:'Hind',Helvetica] text-base placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.08] transition-colors"
                placeholder="Company name"
              />
            </div>

            {/* Message */}
            <div>
              <label className="[font-family:'Hind',Helvetica] text-white/80 text-sm font-medium block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white [font-family:'Hind',Helvetica] text-base placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.08] transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full h-auto px-8 py-4 rounded-lg bg-white text-gray-900 [font-family:'Hind',Helvetica] font-semibold text-lg tracking-wide hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      <FooterWrapperSection />
    </main>
  );
};
