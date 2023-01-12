import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";
import {GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { graphql } from "gatsby";
import { HomePageDataType, categoryData } from "../interface/pageInterface";

type GraphQlResult = {
    allContentfulHomePage: {
      edges: {
        node: HomePageDataType;
      }[];
    };
    allContentfulCategory?: {
      distinct: [string]
      edges: {
        node: categoryData;
      }[];
    };
  };


const Hero: React.FC<PageProps<GraphQlResult>> = ({data}) => {
    const homeData = data.allContentfulHomePage.edges[0];
    const images = withArtDirection(getImage(homeData.node.desktopHeroImage), [
        {
          media: "(max-width: 500px)",
          image: getImage(homeData.node.mobileHeroImage),
        },
      ])

  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt=""
        image={getImage(images)}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h1>Hero text</h1>
      </div>
    </div>
  )
}

export default Hero;

export const Head: HeadFC = () => <title>Hero Page</title>;

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
    allContentfulCategory {
      distinct(field: {categoryName: SELECT})
      edges {
        node {
          categoryName
          slug
        }
      }
    }
  }
`;