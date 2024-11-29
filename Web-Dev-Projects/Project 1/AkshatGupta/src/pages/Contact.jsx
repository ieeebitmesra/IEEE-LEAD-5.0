import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [handle, setHandle] = useState('akshatgupta9612'); // Default handle
  const [error, setError] = useState(null);

  // Function to fetch user info based on the provided handle
  const fetchUserInfo = async (userHandle) => {
    try {
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${userHandle}&checkHistoricHandles=false`);
      const data = await response.json();

      if (data.status === 'OK') {
        setUserInfo(data.result[0]);
        setError(null); // Clear any previous errors
      } else {
        setUserInfo(null);
        setError(data.comment); // Set error message from API response
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
      setUserInfo(null);
    }
  };

  // Fetch default user info on mount
  useEffect(() => {
    fetchUserInfo(handle);
  }, []);

  // Fetch user info on button click
  const handleFetch = () => {
    if (handle.trim()) {
      fetchUserInfo(handle);
    } else {
      setError("Please enter a Codeforces handle.");
    }
  };

  return (
    <div className="mt-16 relative z-[2] h-auto md:w-8/12 w-full rounded-lg p-6 mx-auto">
      <h1 className="text-center  mb-6 text-xl font-bold">Codeforces User Info</h1>

      {/* Search bar for entering a Codeforces handle */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter Codeforces handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="p-2 rounded-l-lg border-2 border-[#F637EC] dark:bg-black"
        />
        <button
          onClick={handleFetch}
          className="p-2 rounded-r-lg bg-[#F637EC] text-black"
        >
          Fetch User Info
        </button>
      </div>

      {/* Display fetched data */}
      <div className="grid h-96 gap-5 w-full grid-cols-10 grid-rows-6 gap-4">
        <div className="col-span-5 rounded-3xl  shadow-neon-pink border-2 border-[#F637EC] text-xl font-bold flex items-center justify-center">
          {userInfo ? userInfo.handle : 'Akshat Gupta'}
        </div>
        <div className="col-span-2 row-span-2 rounded-3xl shadow-neon-pink border-2 border-[#F637EC] flex items-center justify-center text-2xl font-bold">
          {userInfo ? userInfo.rating : 'N/A'}
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl flex px-6 items-center justify-center shadow-neon-pink border-2 border-[#F637EC] font-bold">
          Birla Institute of Technology Mesra
        </div>
        <div className="col-span-5 row-span-4 rounded-3xl  shadow-neon-pink border-2 border-[#F637EC] flex items-center justify-center">
          <img src={userInfo ? userInfo.titlePhoto : ''} alt="User profile" />
        </div>
        <div className="col-span-2 rounded-3xl flex items-center justify-center shadow-neon-pink  border-2 border-[#F637EC] text-xl font-bold">
          {userInfo ? userInfo.rank : 'N/A'}
        </div>
        <div className="col-span-4 row-span-2 rounded-3xl  shadow-neon-pink border-2 border-[#F637EC] flex items-center justify-center">
          {userInfo ? userInfo.maxRating : 'N/A'}
        </div>
        <div className="row-span-2 rounded-3xl  shadow-neon-pink border-2 border-[#F637EC]"></div>
        <div className="col-span-3 rounded-3xl   shadow-neon-pink border-2 border-[#F637EC] flex items-center justify-center">
          {userInfo ? userInfo.city || 'N/A' : 'city'}
        </div>
        <div className="col-span-4 rounded-3xl  shadow-neon-pink border-2 border-[#F637EC] flex items-center justify-center">
          {userInfo ? userInfo.friendOfCount || 'N/A' : 'friends'}
        </div>
        <div className="col-span-3 rounded-3xl  shadow-neon-pink border-2 border-[#F637EC] flex items-center justify-center">
          {userInfo ? userInfo.maxRating : 'N/A'}
        </div>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Contact;
