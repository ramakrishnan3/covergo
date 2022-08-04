import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pricing, packages, packageRate } from '../data/values';

const Form = (props) => {
  const [country, setCountry] = useState('hongkong');
  const [age, setAge] = useState(0);
  const [name, setName] = useState(0);
  const [plan, setPlan] = useState(null);
  const [premium, setPremium] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (country && age && plan) {
      setPremium(10 * pricing[country].rate * age * packageRate[plan]);
    }
  }, [country, age, plan]);

  const handleClick = () => {
    if (age > 100) navigate('/error');
    else navigate('/summary', {state: {name, age, country: pricing[country].label, plan: packages.find(pack => pack.key === 'standard').label, premium, currency: pricing[country].currency}});
  }

  return (
    <div className="bg-gray-50 w-1/2 mt-36 flex justify-center">
      <div className="max-w-7xl mx-auto pt-24 pb-32 px-8 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">{props.heading}</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleClick}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input required onChange={(e) => {setName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="age">
              Age
            </label>
            <input required onChange={(e) => {setAge(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Age" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="country">
              Where do you live
            </label>
            <select required value={country} onChange={(e) => {setCountry(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Age">
              {
                Object.keys(pricing).map(country => {
                  return (<option value={country} >{pricing[country].label}</option>)
                })
              }
            </select>
          </div>
          <div className="mb-4">
            {
              packages.map(pack => {
                return (
                  <div className="flex items-center mb-4">
                    <input required id={pack.key} type="radio" onChange={e => setPlan(e.target.value)} value={pack.key} name="plan-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for={pack.key} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{pack.label} {(premium && pack.expensive) && ( "(+" + ((premium / packageRate[plan]) * (pack.expensive - 1)) + pricing[country].currency + ", " + pack.expensivePercent + ")") } </label>
                  </div>
                )
              })
            }
          </div>
          { premium && <h4 className="text-2xl font-bold text-gray-900 mt-5"> Your premium is: {premium}{pricing[country].currency}</h4> }
          <div className="inline flex flex-row justify-between">
            { props.backButtonText && <Link to={props.prevPage}><button className="bg-white hover:bg-gray-100 text-gray-800 font-bold border border-gray-800 py-3 px-16 mt-10 mx-4 rounded">{props.backButtonText}</button></Link> }
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-16 mt-10 mx-4 rounded" type="submit" >{props.buttonText}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;