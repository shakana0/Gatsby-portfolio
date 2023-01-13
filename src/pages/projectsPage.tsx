import React, { useEffect, useContext } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ProjectsStyling } from "../assets/styles/ProjectsStyling";
import { Link, graphql } from "gatsby";
import { projectDataType, categoryData } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GlobalStateContext } from "../context/GlobalContextProviser";
import { CategoryNav } from "../components/CategoryNav";

type GraphQlResult = {
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

let tempData: any = [];
const Context = () => {
  const globalStateContext = useContext(GlobalStateContext);
  useEffect(() => {
    globalStateContext.setCategories(tempData);
  }, []);
  return <></>;
};

const ProjectsPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const projectsData = data.allContentfulProject.edges;
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
        <h1>Projects</h1>
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
export const Head: HeadFC = () => <title>Projects Page</title>;

//GraphQl query
export const AllProjectsQury = graphql`
  query MyQuery {
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
          # description {
          #   description
          # }
          projectUrl
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
