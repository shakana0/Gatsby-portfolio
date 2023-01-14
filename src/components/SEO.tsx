import React from "react";

type GraphQlResult = {
  siteData: {
    seoTitle: string;
    seoDescription: string;
  };
};

export function SEO({ siteData }: GraphQlResult) {
  const { seoTitle, seoDescription } = siteData;
  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription}></meta>
      {/* <meta charSet={siteData.site.siteMetadata.charSet} />
      <meta name="viewport" content={siteData.site.siteMetadata.viewport} /> */}
    </>
  );
}
