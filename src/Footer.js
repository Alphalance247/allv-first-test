import logos from "./assets/a-logo.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/titter.svg";
import instagram from "./assets/instagram.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="alluvim--lab">
        <img src={logos} alt="" />
        <p>Product of Alluvium Labs</p>
      </div>
      <div className="get-in-touch">
        <h4>Get in touch</h4>
        <div className="footer-social">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      <div className="contact">
        <h3>Contact us</h3>
        <p className="lorem">
          10, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>+2347012113233</p>
        <p>+2347012113233</p>
      </div>
    </div>
  );
};

export default Footer;
