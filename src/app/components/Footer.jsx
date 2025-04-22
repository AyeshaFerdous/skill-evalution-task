import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 bg-red-800 text-white text-xs sm:text-md border-t mt-10">
      © {new Date().getFullYear()} CloudCore IT Company
    </footer>
  );
};

export default Footer;
