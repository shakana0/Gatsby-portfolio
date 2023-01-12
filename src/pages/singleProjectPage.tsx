import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SingleProjectStyling } from "../assets/styles/SingleProjectStyling";
import { graphql } from "gatsby";
import { projectDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



type GraphQlResult = {
  contentfulProject: projectDataType;
};

const SingleProjectPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const projectData = data.contentfulProject;
  return (
    <Layout>
      <SingleProjectStyling>
        <h1>{projectData.projectName}</h1>
        <article>
          {projectData.projectScreenshots.map((screenshot, index) => (
            // <img src={screenshot.gatsbyImageData.images.fallback.src} alt="Screenshot of project" key={index} />
            <GatsbyImage image={getImage(screenshot)} key={index} alt="Project Screenshot Image" />

          ))}
          <p>{projectData.description.description}</p>
          <a
            href={projectData.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Project!
          </a>
        </article>
      </SingleProjectStyling>
    </Layout>
  );
};

export default SingleProjectPage;
export const Head: HeadFC = () => <title>Project Page</title>;

//GraphQl query
export const SingleProjecttQury = graphql`
  query MyQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      projectName
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
`;
