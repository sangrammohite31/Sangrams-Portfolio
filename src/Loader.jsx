// Import necessary packages
import React, { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Nextpage from './components/Nextpage';
import   Lottie  from 'lottie-react';
import  animationdata from './assets/loadingg.json'
// Define the component
const Apppp = () => {
  // Use state to manage the loading progress
  const [loading, setLoading] = useState(true);
  const loadingBarRef = useRef(null);

  // Use an effect to simulate loading
  useEffect(() => {
    // Simulate loading progress incrementally
    const timer = setInterval(() => {
      loadingBarRef.current.continuousStart();
    }, 1000);

    // Clear the interval and stop loading once the component is fully loaded
    setTimeout(() => {
      clearInterval(timer);
      setLoading(false);
      loadingBarRef.current.complete();
    }, 3000); // Simulate a 3 second load time

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=''>
      <LoadingBar color="#f11946" ref={loadingBarRef} />

      {/* Conditionally render the main content based on loading state */}
      {loading ? (
        <div className='w-full  text-center '>
            
            <center>
            <Lottie className='w-[100px] ' animationData={animationdata} loop={true} />
            </center>
<h1>Its Taking Longer than Isual </h1>
        </div>
      ) : (
        <div><Nextpage/></div>
      )}
    </div>
  );
};

export default Apppp;
