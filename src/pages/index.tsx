import React, { useContext, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import { graphql } from "gatsby";
import { HomePageDataType, categoryData } from "../interface/pageInterface";
import { Search } from "../components/Search";
import { Layout } from "../components/Layout";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

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
  console.log(data.allContentfulCategory?.distinct)
  //getImage is a function that makes the code easier to read.
  //It takes a File and returns file.childImageSharp.gatsbyImageData,
  //which will later be passed to the GatsbyImage component.
  const backgroundImageStack = [
    getImage(homeData.node.desktopHeroImage),
    {
      ...getImage(homeData.node.mobileHeroImage),
      media: `(max-width: 500px)`,
    },
  ];

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
        <BgImage image={backgroundImageStack} className="bgImg-wrapper">
          <h1>{homeData.node.heading}</h1>
        </BgImage>

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
            # placeholderUrl
            gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
          }
          mobileHeroImage {
            # placeholderUrl
            gatsbyImageData(
              formats: [JPG, WEBP, AVIF]
              placeholder: BLURRED
              height: 1440
            )
          }
          # mobileHeroImage {
          #   file {
          #     url
          #   }
          #   placeholderUrl
          #   gatsbyImage(formats: WEBP, width: 500, outputPixelDensities: [1, 1])
          # }
          # desktopHeroImage {
          #   file {
          #     url
          #   }
          #   placeholderUrl
          #   gatsbyImage(
          #     formats: WEBP
          #     width: 1263
          #     outputPixelDensities: [1, 1]
          #   )
          # }
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
