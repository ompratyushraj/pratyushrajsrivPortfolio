const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/ompratyushraj" target="_github" className="w-1/2 h-1/2">
            <img src="/assets/github.svg" alt="github" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://x.com/pR1tYuSh" className="w-1/2 h-1/2" target="_twitter">
            <img src="/assets/twitter.svg" alt="twitter"  />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/ritwikraksh/" className="w-1/2 h-1/2" target="_instagram">
            <img src="/assets/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 ompratyushraj. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;