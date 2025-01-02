import React from "react";
import "../App.css"; // انقل تنسيق الهيدر هنا
import logo from "./logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream,faHome,faBrain,faUserMd,faPodcast} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
        <img src={logo} alt="Logo"/>
        </div>
        <p>نافذتك لفهم النفس والعقل</p>
        <nav>
          <ul>
            <li>
              <a href="index.html">
              <FontAwesomeIcon icon={faHome} /> الرئيسية
              </a>
            </li>
            <li>
              <a href="disorders.html">
              <FontAwesomeIcon icon={faBrain} /> الأمراض النفسية
              </a>
            </li>
            <li>
              <a href="patterns.html">
              <FontAwesomeIcon icon={faStream} /> الأنماط الفكرية

              </a>
            </li>
            <li>
              <a href="disorders1.html">
              <FontAwesomeIcon icon={faUserMd} /> الاضطرابات النفسية
              </a>
            </li>
            <li>
              <a href="podcasts.html">
              <FontAwesomeIcon icon={faPodcast} />البودكاستات
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
