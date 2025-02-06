import React, { useEffect, useState } from "react";
import '../components/Counter.css'

const Counter = ({ target, speed }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / speed;
    
    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(updateCounter, 10); // Adjust speed
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target, speed]);

  return <h2 className="counter">{count}+</h2>;
};

const Counters7 = () => {
  return (
    <section className="section7">
      <div className="bg-6">
        <h2 className="fw-bold w-50 text-center">Why Choose Us?</h2>
        <p className="fw-bold w-50 text-center">

          Establishment in year 1992, We are committed to delivering high-quality elevators with precision engineering and unmatched customer satisfaction.
        </p>
        
        {/* Counter Section */}
        <div className="counters-container">
          {/* <div className="counter-box">
            <Counter target={50000} speed={30} />
            <p>Happy Clients</p>
          </div> */}
          <div className="counter-box">
            <Counter target={25000} speed={30} />
            <p>Lift Installation</p>
          </div>
          <div className="counter-box">
            <Counter target={15} speed={20} />
            <p>citys</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Counters7;
