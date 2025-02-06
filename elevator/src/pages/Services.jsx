import React from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import p from "../assets/p.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import door1 from "../assets/door1.jpg";
import door2 from "../assets/door2.jpg";
import door3 from "../assets/door3.jpg";
import door4 from "../assets/door4.jpg";
import door5 from "../assets/door5.jpg";
import door6 from "../assets/door6.jpg";
import type1 from "../assets/type1.jpg";
import type2 from "../assets/type2.jpg";
import type3 from "../assets/type3.jpg";
import type4 from "../assets/type4.jpg";
import type5 from "../assets/type5.jpg";
import type6 from "../assets/type6.jpg";
import type7 from "../assets/type7.jpg";
import type8 from "../assets/type8.jpg";
import bg3 from "../assets/bg3.jpg"
import "../pages/Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router';


const doors = [
  { id: 1, img: door1, title: "Elegant Wooden Door", desc: "A premium wooden door with stylish design." },
  { id: 2, img: door2, title: "Modern Glass Door", desc: "Sleek and stylish glass door for modern homes." },
  { id: 3, img: door3, title: "Classic Oak Door", desc: "Strong and durable oak wood door." },
  { id: 4, img: door4, title: "Luxury Double Door", desc: "High-end double doors for grand entrances." },
  { id: 5, img: door5, title: "Metal Security Door", desc: "Enhanced security with a stylish metal design." },
  { id: 6, img: door6, title: "Minimalist White Door", desc: "A simple and elegant white finish door." },
];

const products = [
  { id: 1, img: type1, title: "Product 1", desc: "Capsule Elevator" },
  { id: 2, img: type2, title: "Product 2", desc: "Passenger Elevator" },
  { id: 3, img: type3, title: "Product 3", desc: "Goods Elevator" },
  { id: 4, img: type4, title: "Product 4", desc: "Automobile Elevator" },
  { id: 5, img: type5, title: "Product 5", desc: "Home Elevator" },
  { id: 6, img: type6, title: "Product 6", desc: "Hydraulic Elevator" },
  { id: 7, img: type7, title: "Product 7", desc: "MRL Elevator" },
  { id: 8, img: type8, title: "Product 8", desc: "Hospital Elevator" },
];


const products1 = [
  { id: 1, img: p, title: "Product 1", desc: "High-quality product with modern design." },
  { id: 2, img: p2, title: "Product 2", desc: "Elegant and durable product for everyday use." },
  { id: 3, img: p3, title: "Product 3", desc: "Stylish and sleek design for modern needs." },
  { id: 4, img: p4, title: "Product 4", desc: "Innovative and high-performance product." },
  { id: 5, img: p5, title: "Product 5", desc: "Premium quality with great features." },
  { id: 6, img: p6, title: "Product 6", desc: "Affordable and efficient product." },
];

const Services = () => {

  const navigate = useNavigate();
    const handleContact = () => {
      navigate("/Contact"); 
    };
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleDownloadBrochure = async () => {
    const brochureUrl = "http://localhost:5173/Brochure.pdf"; 
  
    try {
      const response = await fetch(brochureUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank"; // Opens in a new tab
      link.download = "brochure.pdf"; // Ensures it downloads properly
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the object URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading brochure:", error);
    }
  };


  const settings3 = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };


  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="services-page">


<section className="section11 p-0">
        <div className="bg-4">
          <h2 className="fw-bold w-50 text-center">Our Products</h2>
          <p className="fw-bold w-50 text-center">
            Bringing The World’s Number One Home Elevators and Stairlifts to India
          </p>
          <div className="buttons mt-4">
          <motion.button
              type="button"
              onClick={handleContact}
              className="btn btn-outline-light2 btn-lg mx-2"
              whileHover={{ scale: 1.1 }}
            >
              CONTACT US
            </motion.button> 
          </div>
        </div>
      </section>
     

      {/* Carousel Section */}
      
      <section className="section8 p-3">
      <h2 className="text-center">Types of Elevators</h2>
      <Slider {...settings} className="product-carousel container-fluid">
        {products.map((product) => (
          <div key={product.id} className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.img} className="card-img-top h-100" alt={product.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.desc}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>


      {/* Categories Section 9 */}
      <section className="section9 p-3">
      <h2 className="text-center">Our Doors</h2>
      <Slider {...settings2} className="product-carousel container-fluid">
        {doors.map((door) => (
          <div key={door.id} className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={door.img} className="card-img-top h-100" alt={door.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{door.title}</h5>
                <p className="card-text">{door.desc}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>

      {/* Call-to-Action Section */}

      <section className="section10 p-3">
      <h2 className="text-center">Our Cabings</h2>
      <Slider {...settings3} className="product-carousel container-fluid">
        {products1.map((product) => (
          <div key={product.id} className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.img} className="card-img-top h-100" alt={product.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.desc}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>



 {/* Hero Section */}
 <section className="hero-section text-center" data-aos="fade-up">
  <h1 className="hero-title">Discover Our Premium Products</h1>
  <p className="hero-subtitle">
    High-quality, innovative designs tailored for your modern needs.
  </p>
  <button className="btn btn-primary1 btn-lg" onClick={handleDownloadBrochure}>
    Download Brochure
  </button>
</section>;

         
      
    </div>
  );
};




export default Services;
