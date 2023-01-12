import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CategoyStyling } from "../assets/styles/CategoryStyling"
import { Link, graphql } from "gatsby";
import { categoryData } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


type GraphQlResult = {
  contentfulCategory: categoryData;
};

const CategoryPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const category = data.contentfulCategory;
  return (
    <Layout>
      <CategoyStyling>
        <h1>{category.categoryName}</h1>
        <div className="conatiner">
        {category.project.map((project, index) => (
          <Link to={`/project/${project.slug}`} key={index}>
            <article>
              <GatsbyImage image={getImage(project.projectThumbnail)} key={index}  alt="Project Thumbnail Image" />
              <h3>{project.projectName}</h3>
            </article>
          </Link>
        ))}
        </div>
      </CategoyStyling>
    </Layout>
  );
};

export default CategoryPage;
export const Head: HeadFC = () => <title>Category Page</title>;

//GraphQl query
export const AllAboutQury = graphql`
  query MyQuery($slug: String) {
    contentfulCategory(slug: { eq: $slug }) {
      categoryName
      project {
        projectName
        projectThumbnail {
          gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
          # file {
          #   url
          # }
        }
        slug
      }
    }
  }
`;
