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
    </>
  );
}
