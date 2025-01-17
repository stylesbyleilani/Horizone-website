import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "07015910621";
  const message = "Hello! I'm interested in booking a room at Horizone Hotel.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 shadow-lg transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6" />
       {/* <p className='font-semibold hover:hidden '>whatsApp</p> */}
      <span className=" group-hover:inline whitespace-nowrap">Chat with us</span>
    </div>
  );
};

export default WhatsAppButton;