import React from "react";
const Title = ({ title1, title2, titleStyles, title2Styles, paraStyles }) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${titleStyles} h2`}>
        {title1}{" "}
        <span className="text-secondary custom-light-font">{title2}</span>
      </h2>
      <p className={`${paraStyles} d-none`}>
        from times classics to modern masterpieces,
        <br />
        find the perfect read for every moment
      </p>
    </div>
  );
};
export default React.memo(Title);
