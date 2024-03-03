import React from "react";

const LeaveContainer = ({ show }) => {
  return (
    <div className={`${show ? 'block' : 'hidden'} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 py-0 px-9 rounded-lg`}>
      <h2 className="text-white mb-4">Request for leave</h2>
      <form>
        <div className="mb-2">
          <label htmlFor="leaveType" className="text-white block">Type</label>
          <select id="leaveType" className="border rounded px-0 py-0.5">
            <option value="">Select leave type</option>
            <option value="sick">Sick leave</option>
            <option value="vacation">Vacation</option>
            <option value="personal">Personal leave</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="text-white block">Start Date</label>
          <input type="date" id="startDate" className="border rounded px-0 py-0.5" />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="text-white block">End Date</label>
          <input type="date" id="endDate" className="border rounded px-0 py-0.5" />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="text-white block">Reason</label>
          <textarea id="reason" className="border rounded px-1 py-0 w-full" rows="2"></textarea>
        </div>
        <button type="submit" className="bg-white text-red-500 px-1 py-2 rounded">Done</button>
      </form>
    </div>
  );
};

export default LeaveContainer;
