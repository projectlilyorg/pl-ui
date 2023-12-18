import React from "react";

const Content = () => {
  const heading = "Mission";
  const body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in ornare velit, sed porttitor metus. Phasellus elementum feugiat purus, ac blandit enim ultrices a. Phasellus nisl ipsum, consequat a ante varius, fermentum semper mi. Morbi egestas, libero ac dignissim tincidunt, tellus nisl facilisis diam, nec placerat nisl lorem ac tortor. Nullam vehicula vel tortor non sollicitudin. Duis sit amet mauris nec tellus dapibus ultricies. Nulla bibendum nisi eu risus consequat, ut sollicitudin turpis sodales.";
  return (
    <div className="content">
      <h2>{heading}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Content;
