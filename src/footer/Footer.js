import logos from "../assets/a-logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/titter.svg";
import instagram from "../assets/instagram.svg";
import FooterModule from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={FooterModule.Footer}>
      <div className={FooterModule.alluvimLab}>
        <img src={logos} alt="" />
        <p>Product of Alluvium Labs</p>
      </div>

      <div className={FooterModule.getInTouch}>
        <h4>Get in touch</h4>
        <div className={FooterModule.footerSocial}>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>

      <div className={FooterModule.contact}>
        <h3>Contact us</h3>
        <p className={FooterModule.lorem}>
          10, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>+2347012113233</p>
        <p>+2347012113233</p>
      </div>
    </div>
  );
};

export default Footer;
