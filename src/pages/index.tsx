import React, { useContext, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import { graphql } from "gatsby";
import { HomePageDataType, categoryData } from "../interface/pageInterface";
import { Search } from "../components/Search";
import { Layout } from "../components/Layout";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import { BgImage } from "gbimage-bridge";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

type GraphQlResult = {
  allContentfulHomePage: {
    edges: {
      node: HomePageDataType;
    }[];
  };
  allContentfulCategory?: {
    edges: {
      node: categoryData;
    }[];
  };
};

let tempData: any = [];
const Context = () => {
  const globalStateContext = useContext(GlobalStateContext);
  useEffect(() => {
    globalStateContext.setCategories(tempData);
  }, []);
  return <></>;
};

const IndexPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const homeData = data.allContentfulHomePage.edges[0];
  //getImage is a function that makes the code easier to read.
  //It takes a File and returns file.childImageSharp.gatsbyImageData,
  //which will later be passed to the GatsbyImage component.
  // const backgroundImageStack = [
  //   getImage(homeData.node.desktopHeroImage),
  //   {
  //     ...getImage(homeData.node.mobileHeroImage),
  //     media: `(max-width: 500px)`,
  //   },
  // ];

  const images = withArtDirection(getImage(homeData.node.desktopHeroImage), [
    {
      media: "(max-width: 500px)",
      image: getImage(homeData.node.mobileHeroImage),
    },
  ]);

  //saving categories in a varible
  const categories = data.allContentfulCategory?.edges;
  //mapping to get rid of the nodes in the array and any dublicates
  categories?.map((category) => {
    // tempData.push(category);
    if (!tempData.includes(category.node)) {
      tempData.push(category.node);
    }
  });
  return (
    <Layout>
      <Context />
      <Search />
      <IndexStyling>
      <div className="bg-image-wrapper" style={{ display: "grid" }}>
        {/* <div className="bg-image-wrapper"> */}
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

export const Head: HeadFC = () => <title>Home Page</title>;

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
      edges {
        node {
          categoryName
          slug
        }
      }
    }
  }
`;
