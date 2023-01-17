import React from "react";

// export const onRenderBody = (gatsbyUtils) => {
//   const { setHtmlAttributes } = gatsbyUtils;

//   setHtmlAttributes({ lang: "en" });
// };
exports.onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" })
  }