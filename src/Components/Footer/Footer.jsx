import "./Footer.css"

const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
          <p>© {new Date().getFullYear()} Yashwanth. All rights reserved.</p>
        </footer>
      );
    };
    
    export default Footer;
    