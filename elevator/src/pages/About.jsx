import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../pages/About.css";
import Aboutimg from "../assets/Aboutimg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";
import a8 from "../assets/a8.png";
import a9 from "../assets/a9.png";
import a10 from "../assets/a10.png";
import a11 from "../assets/a11.png";
import a12 from "../assets/a12.png";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import e8 from "../assets/e8.png";
import { useNavigate } from 'react-router';
import Counters7 from "../components/Counter";


const About = () => {
const navigate = useNavigate();
  const handleContact = () => {
    navigate("/Contact"); 
  };

  // const CarouselCard = ({ img, title, text }) => (
    const carouselSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  return (
    <>
      <section className="section5 p-0">
        <div className="bg-3">
          <h2 className="fw-bold w-50 text-center">About Price Elevator</h2>
          <p className="fw-bold w-50 text-center">
            Bringing The World’s Number One Home Elevators and Stairlifts to India
          </p>
          <div className="buttons mt-4">
          <motion.button
              type="button"
              onClick={handleContact}
              className="btn btn-outline-light1 btn-lg mx-2"
              whileHover={{ scale: 1.1 }}
            >
              CONTACT US
            </motion.button> 
          </div>
        </div>
      </section>
      
      <section className="section6 container-fluid py-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center maindiv gap-5">
        <motion.div
            className="frame  text-md-start"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="fw-bold display-4 text-center">About Us</h1>
            <p className="mt-3 fs-5 text-center">
              People in elevators travel comfortably through buildings and other
              urban spaces. PRINCE strives to achieve ever-improving safety and
              energy savings.
            </p>
            <p className="mt-3 fs-5 text-center">
              We are quality-centric and established as a reliable name in the
              industry.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quasi, laboriosam libero quis alias incidunt! Eaque rerum reiciendis, impedit assumenda illum molestiae a suscipit fuga magnam eos illo nesciunt ullam.
            </p>
           
          </motion.div>

          <motion.div
            className="bgimg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Aboutimg}
              alt="Main Elevator"
              className="img-fluid rounded shadow-lg"
            />
          </motion.div>

          <div className="factors row mt-4">
          <h1 className="fw-bold text-center">The factors of counts</h1> 
              <motion.div
                className="col-md-6 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                
              >
                
                <ul className="list-unstyled">
                  <li>✔ Association with leading</li>
                  <li>✔ Prompt Service</li>
                  <li>✔ Experienced Workers</li>
                  <li>✔ Time-Bound Delivery</li>
                  <li>✔ Prompt Services</li>
                 
                </ul>
              </motion.div>
              <motion.div
                className="col-md-6 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <ul className="list-unstyled">
                  <li>✔ Customer Satisfaction</li>
                  <li>✔ Quality Management</li>
                  <li>✔ Efficient Workforce</li>
                  <li>✔ Strong Financial Position</li>
                  <li>✔ Efficient Workforce</li>
                  
                </ul>
              </motion.div>
            </div>
         
        </div>
      </section>

      

      


      <section className="section7 container-fluid py-5 d-flex flex-column justify-content-center align-items-center gap-3">
  <h2 className="section-title text-center ">We are Technically Associated with..</h2>

  {/* First Carousel */}
  <div className="carousel-container">
    <Slider {...carouselSettings}>
      {[a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12].map((img, index) => (
        <div key={index} className="carousel-item">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={img} alt={`Product ${index + 1}`} className="carousel-img" />
          </motion.div>
        </div>
      ))}
    </Slider>
  </div>

  <h2 className="section-title text-center ">We at PRINCE offer following type of elevator..</h2>

  {/* Second Carousel */}
  <div className="carousel-container">
    <Slider {...carouselSettings}>
      {[e1, e2, e3, e4, e5, e6, e7, e8].map((img, index) => (
        <div key={index} className="carousel-item">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={img} alt={`Extra ${index + 1}`} className="carousel-img2" />
          </motion.div>
        </div>
      ))}
    </Slider>
  </div>
</section>

<Counters7/>
     
    </>
  );
};

export default About;
