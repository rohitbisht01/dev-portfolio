"use client";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center my-4 text-sm gap-1 md:gap-2  items-center">
      <p>© {new Date().getFullYear()}</p>
      <p
        className="cursor-pointer text-blue-600 hover:text-blue-800"
        onClick={handleScrollToTop}
      >
        Rohit Singh Bisht
      </p>{" "}
      <p>All rights reserved.</p>
    </div>
  );
};

export default Footer;
