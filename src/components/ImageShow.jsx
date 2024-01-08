import React from "react";

export const ImageShow = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} />
    </div>
  );
};
