import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ProjectsStyling } from "../assets/styles/ProjectsStyling";
import { Link, graphql } from "gatsby";
import { projectDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet

type GraphQlResult = {
  allContentfulProject: {
    edges: {
      node: projectDataType;
    }[];
  };
};

const ProjectsPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const projectsData = data.allContentfulProject.edges;
  return (
    <Layout>
      <ProjectsStyling>
        <h1>Projects</h1>
        <div className="container">
          {projectsData.map((project, index) => (
            <Link to={`/project/${project.node.slug}`} key={index}>
              <article>
                {/* <picture>
                <source
                    src={
                      project.node.projectThumbnail.gatsbyImageData.images
                        .fallback.src
                    }
                    srcSet={ project.node.projectThumbnail.gatsbyImageData.images
                      .fallback.srcSet}
                    />
                  <img src={project.node.projectThumbnail.gatsbyImageData.images.fallback.src} alt="Project Thumbnail" />
                </picture> */}
                <GatsbyImage image={getImage(project.node.projectThumbnail)} key={index}  alt="Project Thumbnail Image" />

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

            # file {
            #   url
            # }
            # gatsbyImage(formats: WEBP, width: 400, outputPixelDensities: [1, 1])
          }
          projectScreenshots {
            gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)

            # file {
            #   url
            # }
          }
          description {
            description
          }
          projectUrl
        }
      }
    }
  }
`;
