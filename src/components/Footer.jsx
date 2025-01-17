


import React from 'react';
import { Camera, Twitter, Facebook, Music2, MessageCircle } from 'lucide-react';

const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);

const SocialIcon = ({ Icon }) => (
  <button 
    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-gray-100"
    aria-label="Social media link"
  >
    <Icon size={20} />
  </button>
);

const Footer = () => {
  const links = {
    about: ['About Us', 'Blog', 'Career'],
    support: ['Contact Us', 'Return', 'FAQ']
  };

  return (
    <footer className="bg-gray-950 text-gray-200" id='contact'>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <FooterSection title="Horizone">
            <p className="space-y-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p className="mt-8 text-sm">© 2024 Horizone. All rights reserved.</p>
          </FooterSection>

          {/* About Links */}
          <FooterSection title="About">
            <nav className="flex flex-col gap-2">
              {links.about.map(link => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </FooterSection>

          {/* Support Links */}
          <FooterSection title="Support">
            <nav className="flex flex-col gap-2">
              {links.support.map(link => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </FooterSection>

          {/* Newsletter and Social */}
          <FooterSection title="Get Updates">
            <form className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-sm p-2"
                aria-label="Email subscription"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 mt-4">
              <SocialIcon Icon={Camera} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={MessageCircle} />
              <SocialIcon Icon={Music2} />
            </div>

            <div className="mt-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              {' · '}
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
};

export default Footer;