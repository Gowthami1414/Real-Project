import React from "react";
import youngManImage from '../../components/Profile/images/young man holding laptop and pointing up.png';

const EditContainer = ({ show }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white-500 py-8 px-12 rounded-lg mx-2 w-full lg:w-1/2 xl:w-1/2 h-full">
        
        <form className="grid grid-cols-1 gap-4">
          <div className="flex justify-end">
            
            <img src={youngManImage} alt="Young man holding laptop" className="w-16 h-16" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="px-3 py-2 border rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="px-3 py-2 border rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="px-3 py-2 border rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <textarea id="address" className="px-3 py-2 border rounded-lg"></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="text" id="contactNumber" className="px-3 py-2 border rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input type="text" id="city" className="px-3 py-2 border rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="state">State</label>
              <input type="text" id="state" className="px-3 py-2 border rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="px-3 py-2 border rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
            <button type="submit" className="bg-white text-red-500 px-4 py-2 rounded-lg mr-2">Cancel</button>
            </div>
            <div>
              <button type="submit" className="bg-white text-red-500 px-4 py-2 rounded-lg">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContainer;