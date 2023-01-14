import React from "react";
import type { HeadFC, PageProps, HeadProps } from "gatsby";
import { graphql } from "gatsby";
import { siteMetadataType } from "../interface/pageInterface";

type GraphQlResult = {
  siteData: {
    site: siteMetadataType;
  };
};

export function SEO({ data }: HeadProps<GraphQlResult>) {
  console.log(data, "from SEO :)");
  return (
    <>
      {/* <title>{data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content={data.site.siteMetadata.description}
      ></meta>
      <meta charSet={data.site.siteMetadata.charSet} />
      <meta name="viewport" content={data.site.siteMetadata.viewport} /> */}
    </>
  );
}

export const Hej = ({ siteData }: GraphQlResult) => {
  console.log(siteData.site.siteMetadata.title, "hej");
  //   return <title>{site.siteMetadata.title}</title>;
};

//GraphQl query
export const SeoHomeQury = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        charSet
        viewport
      }
    }
  }
`;
