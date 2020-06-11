import React from "react";

const Image = (props) => {
  const { imageUrl, imgHeight, imgWidth } = props;
  return (
    <img src={imageUrl} alt={""} height={imgHeight} width={imgWidth}></img>
  );
};

export default Image;
