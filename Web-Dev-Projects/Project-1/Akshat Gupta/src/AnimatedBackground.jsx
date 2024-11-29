// AnimatedBackground.jsx
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden  z-[0] bg-transparent">
      {/* Background gradient circles */}
      <div className="absolute -top-10 left-10 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60 animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-70 animate-float2" />
      <div className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-br from-green-200 to-blue-300 rounded-full opacity-50 animate-float3" />
      <div className="absolute bottom-10 left-40 w-72 h-72 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-full opacity-40 animate-float4" />
    </div>
  );
};

export default AnimatedBackground;
