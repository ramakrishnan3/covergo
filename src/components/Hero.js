import React from "react";
import { Link, useLocation } from "react-router-dom";

const Hero = (props) => {
  const location = useLocation();
  return (
    <div className="bg-gray-50 w-1/2 mt-36 flex justify-center">
      <div className="max-w-7xl mx-auto pt-24 pb-32 px-8 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">{props.heading}</h2>
        { location?.state?.name && <h3 className="text-2xl font-extrabold text-gray-900 mb-5">{location.state.name},</h3> }
        { props.subtext && props.subtext.map((subtext) => <p>{subtext}</p>) }
        { 
          location.state && <div className="flex justify-center flex-col items-center">
            <p className="my-2">Name: {location.state.name}</p>
            <p className="my-2">Age: {location.state.age}</p>
            <p className="my-2">Where do you live: {location.state.country}</p>
            <p className="my-2">Package: {location.state.plan}</p>
            <p className="my-2">Premium: {location.state.premium + location.state.currency}</p>
          </div>
        }
        <div className="inline flex flex-row justify-between">
          { props.backButtonText && <Link to={props.prevPage}><button className="bg-white hover:bg-gray-100 text-gray-800 font-bold border border-gray-800 py-3 px-16 mt-10 mx-4 rounded">{props.backButtonText}</button></Link> }
          <Link to={props.nextPage}><button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-16 mt-10 mx-4 rounded">{props.buttonText}</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;