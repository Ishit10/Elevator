import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/Contact.css";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "57a60c5e-d2ae-4413-bfc4-e19d3c460c5a";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="section5 ">
      <div className="contact-info d-flex justify-content-center align-items-center gap-3">

      <div className="contact-form-container">
        <h2 className="contact-form-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
        <div className="form-result">
          {result && (
            <p className={isSuccess ? "success-message" : "error-message"}>
              {result}
            </p>
          )}
        </div>
      </div>

      <div className="info text-center">
        <h1>Contact Us to Start Your Project.</h1> <br />
        <h3>Let's Talk.</h3>
        <p>prince.elevator@gmail.com</p>
        <p>+91 98986 38415</p> <br />

        <h3>Visit Us.</h3>
        <p>
            PRINCE ELEVATOR PRIVATE LIMITED,
            <br />
            Shop No SF 21 Vrund Complex,
            <br />
            Akota Road, B P C Road,
            <br />
            Akota, Vadodara - 390020, INDIA.
            <br />
            ISO 9001:2015 Certified
          </p>
      </div>
      </div>
      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.8474705439868!2d73.17261419999998!3d22.30109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8a8f97b7887%3A0xd6e1434aa7dc27f5!2sNear%20Urmi%20Char%20Rasta%2C%20Vadodara%2C%20Gujarat%20390020!5e0!3m2!1sen!2sin!4v1737387701476!5m2!1sen!2sin"
          className="map-frame"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
