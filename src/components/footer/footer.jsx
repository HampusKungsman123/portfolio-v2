import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Hampus Kungsman</p>
    </footer>
  );
}
export default Footer;
