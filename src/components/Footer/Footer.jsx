import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h3>GO TRAVEL</h3>
        <div className="social-app">
            <a href="#"><InstagramIcon /></a>
            <a href="#"><FacebookIcon /></a>
            <a href="#"><GoogleIcon /></a>
            <a href="#"><WhatsAppIcon /></a>
            <a href="#"><TelegramIcon /></a>
            <a href="#"><YouTubeIcon /></a>
        </div>
      </div>
      <hr />
    <div className="footer-columns">
      <div className="footer-column">
        <h4 style={{display:"inline-flex", alignItems:"center"}}> <PublicIcon/> GO TRAVEL</h4>
        <p>Go Travel, это забота
о вашем здоровье
и невероятные эмоции</p>
      </div>
      <div className="footer-column">
        <h4>Туры</h4>
        <p>Пляжные</p>
        <p>Экскурсионные</p>
        <p>Оздоровительные</p>
        <p>Спортивные</p>
      </div>
      <div className="footer-column">
        <h4>Полезные ссылки</h4>
        <p>Цены</p>
        <p>Настройки</p>
        <p>Заказы</p>
        <p>Помощь</p>
      </div>
      <div className="footer-column contacts">
        <h4>Контакты</h4>
        <p><HomeIcon/><span>Кыргызстан, Бишкек 10012</span></p>
        <p><MailOutlineIcon /> <span>travel@gmail.com</span></p>
        <p><LocalPhoneIcon /> <span>+ 996 504 90 07 74</span></p>
        <p><LockIcon /> <span>+ 996 777 90 30 76</span></p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;