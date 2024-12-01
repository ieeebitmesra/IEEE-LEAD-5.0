import { useState } from "react";

const Codeforces = () => {
  const [handle, setHandle] = useState("zaidddiebuoy");
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserInfo = async () => {
    try {
      setError(null); // Clear previous errors
      const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${handle}&checkHistoricHandles=false`
      );
      const data = await response.json();

      if (data.status === "OK") {
        setUserInfo(data.result[0]);
      } else {
        setUserInfo(null);
        if (data.comment && data.comment.includes("not found")) {
          setError("User not found. Please try again with a valid handle.");
        } else {
          setError(data.comment || "An error occurred.");
        }
      }
    } catch (error) {
      setUserInfo(null);
      setError("Unable to fetch user info. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center py-6 px-8 mb-24">
      <h1 className="text-3xl lg:text-6xl mb-6 text-customText2 ">Codeforces Profile</h1>

      {/* Input Section */}
      <div className="mb-6 flex w-full max-w-lg justify-center">
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="Enter Codeforces handle"
          className="p-2 rounded-l-lg border-2 border-customText2 bg-customText text-black"
        />
        <button
          onClick={fetchUserInfo}
          className="p-2 rounded-r-lg bg-customText2"
        >
          Fetch User Info
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-6">{error}</p>}

      {/* Grid Layout */}
      <div className="grid grid-cols-10 grid-rows-6 gap-4 w-full h-full sm:grid-cols-10 sm:grid-rows-6 sm:gap-4">
        {/* User Handle */}
        <div className="col-span-10 sm:col-span-5 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          {userInfo?.handle || "No Handle"}
        </div>

        {/* Rating */}
        <div className="col-span-10 sm:col-span-2 sm:row-span-2 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          Rating: {userInfo?.rating || "N/A"}
        </div>

        {/* Organization */}
        <div className="col-span-10 sm:col-span-3 sm:row-span-3 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal text-center border-customText2 border-2">
          {userInfo?.organization || "No Organization"}
        </div>

        {/* Profile Picture */}
        <div className="col-span-10 sm:col-span-5 sm:row-span-4 rounded-xl bg-customText flex items-center justify-center border-customText2 border-2 p-4 max-sm:row-span-4">
          {userInfo?.titlePhoto ? (
            <img
              src={userInfo.titlePhoto}
              alt="Profile Picture"
              className="rounded-full w-full max-w-[150px] max-h-[150px] object-cover max-sm:w-24 max-sm:h-24"
            />
          ) : (
            <p className="text-customText">No Image</p>
          )}
        </div>

        {/* Rank */}
        <div className="col-span-10 sm:col-span-2 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          Rank: {userInfo?.rank || "N/A"}
        </div>

        {/* Max Rating */}
        <div className="col-span-10 sm:col-span-5 sm:row-span-2 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          Max Rating: {userInfo?.maxRating || "N/A"}
        </div>

        {/* City */}
        <div className="col-span-10 sm:row-span-2 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          City: {userInfo?.city || "N/A"}
        </div>

        {/* Friend Count */}
        <div className="col-span-10 sm:col-span-3 sm:row-span-2 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          Friends: {userInfo?.friendOfCount || "N/A"}
        </div>

        {/* Contribution */}
        <div className="col-span-10 sm:col-span-7 sm:row-span-2 rounded-xl bg-customText flex items-center justify-center text-customText2 font-normal border-customText2 border-2">
          Contribution: {userInfo?.contribution || "N/A"}
        </div>
      </div>
    </div>
  );
};

export default Codeforces;
