import React from 'react';
import SectionTitle from '../../components/SectionTitle';

function Education() {
  return (
    <div className="bg-primary p-6 rounded-lg flex flex-col">
      <SectionTitle title="Education" />
      <div className="flex flex-col gap-6 text-white py-6">
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-400">Birla Institute of Technology</h3>
          <p>B.Tech in CSE</p>
          <p>CGPA: 9.04</p>
          <p>September 2024 - 2027</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-md">
          <p>Jee Main <strong className="text-yellow-400">AIR: 2440</strong></p>
        </div>
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-400">Valley View School</h3>
          <p>Class 12: 91.8%</p>
          <p>2021 - 2023</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-400">Valley View School</h3>
          <p>Class 10: 93.2%</p>
          <p>2009 - 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
