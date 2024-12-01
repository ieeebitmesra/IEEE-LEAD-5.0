import React, { useState, useEffect } from "react";
import axios from "axios";

function Rating() {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    axios
      .get("https://codeforces.com/api/user.info?handles=raghavbajaj328")
      .then((response) => {
        setRating(response.data.result[0].rating);
      });
  }, []);

  return (
    <div className="p-6">
      <hr className="border-t-2 border-shtxt mt-6" />
      <div className="flex flex-row">
        <div className="mt-4 text-center">
          {rating && (
            <>
              <div className="text-2xl font-bold text-white-300">{rating}</div>
              <div className="text-lg text-white-900 mt-2">Codeforces</div>
            </>
          )}
        </div>
      </div>
      <hr className="border-t-2 border-shtxt mt-6" />
    </div>
  );
}

export default Rating;
