import React from "react";
import video1 from "../assets/video1.mp4";
import '../pages/Home.css'
import p from "../assets/p.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import Counters7 from "../components/Counter";
import { motion } from "framer-motion";
import Aboutimg from "../assets/Aboutimg.png";
import { useNavigate } from 'react-router';



const Home = () => {
  const navigate = useNavigate();
  const handleServices = () => {
    navigate("/Services"); 
  };

  const handleRead = () => {
    navigate("/About"); 
  };
  const handleContact = () => {
    navigate("/Contact"); 
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const buttonVariantss = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  
  return (
    <>
      {/* section 1 */}

      <section className="section1 container-fluid d-flex justify-content-center align-items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="video-bg"
          playsInline
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
        <div className=" text-center">
          <h1
            className="fw-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Prince Elevators - India’s Symphony
          </h1>
          <p
            className="mt-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We are a quality-centric company, and owing to several factors
            that benefit customers and improve our performance
            magnificently, we are established as a reliable and
            well-known name in this domain.
          </p>
          <div className="buttons mt-4" variants={buttonVariants}>
            <button
              type="button"
              className="btn btn-primary btn-lg mx-2"
              onClick={handleRead}
              whileHover="hover"
              variants={buttonVariants}
            >
              READ MORE
            </button>
            <button
              type="button"
              className="btn btn-outline-light mx-2"
              onClick={handleContact}
              whileHover="hover"
              variants={buttonVariants}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <section className="section2 container-fluid">
      <motion.div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5"
        initial="hidden"
        animate="visible"
      >
        {/* Image with Scale Animation */}
        <motion.div className="bgimg" variants={imageVariants}>
          <img
            src={Aboutimg}
            alt="Main Elevator"
            className="img-fluid rounded shadow-lg"
          />
        </motion.div>

        {/* Text Content with Slide & Fade-in Animation */}
        <motion.div className="frame text-center text-md-start" variants={textVariants}>
          <motion.h1 className="fw-bold display-4" variants={textVariants}>
            About Us
          </motion.h1>
          <motion.p className="mt-3 fs-5" variants={textVariants}>
            People in elevators travel comfortably through buildings and other
            urban spaces. PRINCE strives to achieve ever-improving safety and
            energy savings.
          </motion.p>
          <motion.p className="mt-3 fs-5" variants={textVariants}>
            We are quality-centric and established as a reliable name in the
            industry. Factors that make us unique include:
          </motion.p>
          <br />

          {/* Animated Button */}
          <motion.button
            type="button"
            className="btn btn-primary btn-lg mx-2 "
            whileHover="hover"
            onClick={handleRead}
            variants={buttonVariantss}
          >
            READ MORE
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
      

      <section className="section3">
        <div className="bg-2">
          <h2 className=" fw-bold w-50 text-center">Delivering Comfort & Happiness With Our Sophisticated Residential Lifts</h2>
          <p className=" fw-bold  w-50 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab, ipsam libero temporibus eos ipsa sed accusamus sequi assumenda consequatur odio, dolores impedit! Corrupti voluptatem nesciunt magnam voluptatum culpa quos.</p>
        </div>
      </section>

      <section className="section4 p-3">
        <h2 className="text-center">Our Products</h2>
        <div className="product d-flex justify-content-center align-items-center gap-5 p-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={p} className="card-img-top h-100" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <a href="./Services" className="btn btn-primary">
              Read More
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={p2} className="card-img-top h-100" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <a href="./Services" className="btn btn-primary">
              Read More
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={p3} className="card-img-top h-100" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <a href="./Services" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>


      <Counters7/>
      

    </>
  );
};

export default Home;
