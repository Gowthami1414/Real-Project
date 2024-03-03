import React from 'react';

const Container = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/4 bg-gray-200 p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">HR Section 1</h2>
        {/* Add HR-related content here */}
        <div>
          {/* Example HR content */}
          <p>This is the HR section of the application.</p>
          <p>You can add HR-related functionalities and information here.</p>
        </div>
      </div>
      {/* Second container */}
      <div className="w-full h-96 md:w-1/2 bg-gray-200 p-22 rounded-lg mt-4 md:mt-2 md:ml-4">
        <h2 className="text-lg font-semibold mb-4">HR Section 2</h2>
        {/* Add HR-related content here */}
        <div>
          {/* Example HR content */}
          <p>This is the HR section of the application.</p>
          <p>You can add HR-related functionalities and information here.</p>
        </div>
      </div>
      {/* Third container */}
      <div className="w-1/4 bg-gray-200 p-12 rounded-lg mt-4 ml-0">
        <h2 className="text-lg font-semibold mb-4">HR Section 3</h2>
        {/* Add HR-related content here */}
        <div>
          {/* Example HR content */}
          <p>This is the HR section of the application.</p>
          <p>You can add HR-related functionalities and information here.</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
