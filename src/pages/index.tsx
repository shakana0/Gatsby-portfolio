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

    if (!tempData.includes(category)) {
      tempData.push(category.node);
    }
  });
  return (
    <Layout>
      <Context />
      <Search />
      <IndexStyling>
      {/* <div className="bg-image-wrapper" style={{ display: "grid" }}> */}

        <div className="bg-image-wrapper">
          <GatsbyImage
          className="gatsby-img"
            // style={{
            //   gridArea: "1/1",
            // }}
            layout="fullWidth"
            alt="Hero Image"
            image={getImage(images)}
          />
          <div
            className="content-wrapper"
            // style={{
            //   // By using the same grid area for both, they are stacked on top of each other
            //   gridArea: "1/1",
            //   position: "relative",
            //   // This centers the other elements inside the hero component
            //   placeItems: "center",
            //   display: "grid",
            // }}
          >
            {/* Any content here will be centered in the component */}
            <h1>Hero text</h1>
          </div>
        </div>
        {/* <BgImage image={backgroundImageStack} className="bgImg-wrapper">
          <h1>{homeData.node.heading}</h1>
        </BgImage> */}

        {/* 
        <picture>
          {mobilImgList.map((img, index) => (
            <source
              srcSet={img.srcSet}
              type={img.type}
              media="(max-width: 500px)"
              key={index}
            />
          ))}
          
          <source
            srcSet={
              homeData.node.mobileHeroImage.gatsbyImageData.images.fallback
                .srcSet
            }
            src={
              homeData.node.mobileHeroImage.gatsbyImageData.images.fallback.src
            }
            type="image/jpg"
            media="(max-width: 500px)"
          />

          {desktopImgList.map((img, index) => (
            <source
              srcSet={img.srcSet}
              type={img.type}
              media="(min-width: 768px)"
              key={index}
            />
          ))}
          <img src={homeData.node.desktopHeroImage.gatsbyImageData.placeholder.fallback} alt="Blurred desktop hero image" />
          <img src={homeData.node.mobileHeroImage.gatsbyImageData.placeholder.fallback} alt="Blurred mobile hero image" /> */}
        {/* <img
            src={
              homeData.node.desktopHeroImage.gatsbyImageData.images.fallback.src
            }
            alt="Desktop hero image"
          /> */}
        {/* </picture>  */}
        <section>
          {/* <h1>{homeData.node.heading}</h1> */}
          <p>{homeData.node.presentationText}</p>
        </section>
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
