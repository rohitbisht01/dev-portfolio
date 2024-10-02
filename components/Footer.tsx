"use client";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center gap-2 justify-center my-4">
      © {new Date().getFullYear()}{" "}
      <span
        onClick={handleScrollToTop}
        className="text-blue-600 cursor-pointer hover:text-blue-800"
      >
        Rohit Singh Bisht
      </span>{" "}
      All rights reserved.
    </div>
  );
};

export default Footer;
