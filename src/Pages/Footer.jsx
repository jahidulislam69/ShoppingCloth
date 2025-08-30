import { Car, ClockFading, IdCard, MailOpen } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 footer">
      <div className="flex flex-col items-center gap-3 sm:p-20 p-10 justify-center mb-10 border-r-1 border-b-1 border-gray-300">
        <Car />
        <h3 className="font-bold text-sm text-center">
          PAN BANGLADESH DELIVERY
        </h3>
        <p className="hidden sm:block">Receive your order anywhere in BD.</p>
      </div>

      <div className="flex flex-col items-center gap-3 mb-10 sm:p-20 p-10 justify-center border-r-1 border-b-1 border-gray-300 ">
        <ClockFading />
        <h3 className="font-bold text-sm text-center uppercase">
          Fast shipping
        </h3>
        <p className="hidden sm:block uppercase text-center">
          GET IN TOUCH FOR ALL YOUR END MOMENT DELIVERY REQUIREMENTS
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 mb-10 sm:p-20 p-10 justify-center border-r-1 border-b-1 border-gray-300">
        <MailOpen />
        <h3 className="font-bold text-sm text-center uppercase">
          Expert advice
        </h3>
        <p className="hidden sm:block uppercase text-center">
          happy to help for any sizing or product related needs
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 mb-10 sm:p-20 p-10 justify-center  border-r-1 border-b-1 border-gray-300">
        <IdCard />
        <h3 className="font-bold text-sm uppercase text-center">Secure payment</h3>
        <p className="hidden sm:block uppercase text-center">
          Your payment information is processed securely.
        </p>
      </div>
    </div>
  );
};

export default Footer;
