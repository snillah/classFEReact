import React from "react";

function Rating({ value, onChange }) {
  const [hover, seHover] = useState(0);
  return (
    <>
      <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <span
              key={star}
              onChange={() => onChange(star)}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                color: star<hover?"#ffc107":"#e4e5e9"
                // "#ffc107","#e4e5e9"
              }}
            >
              ☆
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Rating;
