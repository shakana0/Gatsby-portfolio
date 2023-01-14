import React from "react";
import type { HeadFC, PageProps, HeadProps } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import { graphql } from "gatsby";
import { HomePageDataType, siteMetadataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { SEO, Hej } from "../components/SEO";

type GraphQlResult = {
  allContentfulHomePage: {
    edges: {
      node: HomePageDataType;
    }[];
  };
  site: siteMetadataType;
};

const IndexPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const homeData = data.allContentfulHomePage.edges[0];
  //getImage is a function that makes the code easier to read.
  //It takes a File and returns file.childImageSharp.gatsbyImageData,
  //which will later be passed to the GatsbyImage component.
  const images = withArtDirection(getImage(homeData.node.desktopHeroImage), [
    {
      media: "(max-width: 500px)",
      image: getImage(homeData.node.mobileHeroImage),
    },
  ]);

  return (
    <Layout>
      <IndexStyling>
        <div className="bg-image-wrapper" style={{ display: "grid" }}>
          <GatsbyImage
            className="gatsby-img"
            style={{
              gridArea: "1/1",
              opacity: "0.6",
            }}
            layout="fullWidth"
            alt="Hero Image"
            image={getImage(images)}
          />
          <div
            className="content-wrapper"
            style={{
              gridArea: "1/1",
              position: "relative",
            }}
          >
            <h1>{homeData.node.heading}</h1>
            <p>{homeData.node.presentationText}</p>
          </div>
        </div>
      </IndexStyling>
    </Layout>
  );
};

export default IndexPage;
export const Head: HeadFC = ({data}) => {
  return(
    // @ts-ignore 
    // <SEO />
    <Hej siteData={data}/>
  )
};



// export function Head({data}: HeadProps<GraphQlResult>) {
//   return (
//    <>
//     <title>{data.site.siteMetadata.title}</title>
//     <meta name="description" content={data.site.siteMetadata.description}></meta>
//     <meta charSet={data.site.siteMetadata.charSet} />
//     <meta name="viewport" content={data.site.siteMetadata.viewport} />
//    </>
//   )
// }

//GraphQl query
export const AllHomeQury = graphql`
  query MyQuery {
    allContentfulHomePage {
      edges {
        node {
          heading
          desktopHeroImage {
            gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
          }
          mobileHeroImage {
            gatsbyImageData(
              formats: [JPG, WEBP, AVIF]
              placeholder: BLURRED
              height: 1440
            )
          }
          presentationText
        }
      }
    }
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
