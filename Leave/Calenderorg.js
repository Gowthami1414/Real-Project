import React, { useState } from 'react';
import { Calendar } from 'antd';



const Calenderorg = () => {
  const [date, setDate] = useState();

  const handlePanelChange = (value, mode) => {
    if (mode === 'year' || mode === 'month') {
    setDate(value);
    } 
    // Update state with the selected date
  };

  return (
    <div>
      <Calendar
        value={date}
        onPanelChange={handlePanelChange}
      />
    </div>
  );
};

export default Calenderorg;
