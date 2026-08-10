const Footer = () => {
  return (
    <div className="border-t border-[#1E293B] bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-center text-sm text-[#8FA0BD]">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        <p>
          Built by <span className="text-[#4FD8C4]">Anushka Aryal</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
