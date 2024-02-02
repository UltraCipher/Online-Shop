import React from "react";
import "./Contactus.scss";
import { FaInstagram } from "react-icons/fa6";
import { BiFontSize, BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function ContactUs() {
  return (
    <React.Fragment>
      <div className="contactUsContainer">
        <h2>Contact us</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
            vitae suscipit tellus mauris a diam maecenas sed. Dolor sit amet
            consectetur adipiscing elit. Aliquam id diam maecenas ultricies mi.
            Ipsum suspendisse ultrices gravida dictum fusce. At volutpat diam ut
            venenatis tellus in metus. Vitae proin sagittis nisl rhoncus mattis
            rhoncus urna. Purus semper eget duis at.
          </p>
        </div>
        <div>
          <ul class="wrapper">
            <li class="icon WhatsApp">
              <span class="tooltip">WhatsApp</span>
              <BsWhatsapp style={{ fontSize: "1.4rem" }} />
              <span>
                <i class="fab fa-WhatsApp-f"></i>
              </span>
            </li>
            <li class="icon Telegram">
              <BiLogoTelegram style={{ fontSize: "1.4rem" }} />
              <span class="tooltip">Telegram</span>
              <span>
                <i class="fab fa-Telegram"></i>
              </span>
            </li>
            <li class="icon instagram">
              <FaInstagram style={{ fontSize: "1.4rem" }} />
              <span class="tooltip">Instagram</span>
              <span>
                <i class="fab fa-instagram"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContactUs;
