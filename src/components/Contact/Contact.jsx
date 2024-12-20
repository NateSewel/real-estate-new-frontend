import "./Contact.css";
import { MdCall } from "react-icons/md";

import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Reach Out To Us</span>
          <span className="primaryText">Let Us make Your Dream a Reality</span>
          <span className="secondaryText">
            We are ready to provide the best services for you. We believe a good
            place to live can make your life better.
          </span>

          <div className="flex flex-row gap-2 contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+12027736930</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+12027736930</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="mailto:pinpointproperty050@gmail.com">Message now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
