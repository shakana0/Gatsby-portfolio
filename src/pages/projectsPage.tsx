import React, { useEffect, useContext } from "react";
import type { PageProps, HeadProps } from "gatsby";
import { ProjectsStyling } from "../assets/styles/ProjectsStyling";
import { Link, graphql } from "gatsby";
import {
  projectDataType,
  categoryData,
  projectsPageDataType,
} from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import { CategoryNav } from "../components/CategoryNav";
import { SEO } from "../components/SEO";

type GraphQlResult = {
  allContentfulProjectsPage: {
    edges: {
      node: projectsPageDataType;
    }[];
  };
  allContentfulProject: {
    edges: {
      node: projectDataType;
    }[];
  };
  allContentfulCategory?: {
    edges: {
      node: categoryData;
    }[];
  };
};
//creating a global array that will later hold contain temporary category data
let tempData: any = [];
const Context = () => {
  //getting the value from GlobalStateContext
  const globalStateContext = useContext(GlobalStateContext);
  useEffect(() => {
    //sending tempData by setCategories to GlobalStateContext
    globalStateContext.setCategories(tempData);
  }, []);
  return <></>;
};

const ProjectsPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const projectsData = data.allContentfulProject.edges;
  const projectsPageData = data.allContentfulProjectsPage.edges[0]
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
      <ProjectsStyling>
        <Context />
        <CategoryNav />
        <h1>{projectsPageData.node.pageName}</h1>
        <div className="container">
          {projectsData.map((project, index) => (
            <Link to={`/project/${project.node.slug}`} key={index}>
              <article>
                <GatsbyImage
                  image={getImage(project.node.projectThumbnail)}
                  key={index}
                  alt="Project Thumbnail Image"
                />
                <h3>{project.node.projectName}</h3>
              </article>
            </Link>
          ))}
        </div>
      </ProjectsStyling>
    </Layout>
  );
};

export default ProjectsPage;
export function Head({ data }: HeadProps<GraphQlResult>) {
  const { seoTitle, seoDescription } = data.allContentfulProjectsPage.edges[0].node;
  return (
    <SEO siteData={{ seoTitle: seoTitle, seoDescription: seoDescription }} />
  );
}

//GraphQl query
export const AllProjectsQury = graphql`
  query MyQuery {
    allContentfulProjectsPage {
      edges {
        node {
          pageName
          seoDescription
          seoTitle
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          projectName
          slug
          projectThumbnail {
            gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
          }
          projectScreenshots {
            gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
          }
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
