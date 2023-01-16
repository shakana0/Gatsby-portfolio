import * as React from "react";
import type { PageProps, HeadProps } from "gatsby";
import { CategoryStyling } from "../assets/styles/CategoryStyling";
import { Link, graphql } from "gatsby";
import { categoryData } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";

type GraphQlResult = {
  contentfulCategory: categoryData;
};

const CategoryPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const category = data.contentfulCategory;
  return (
    <Layout>
      <CategoryStyling>
        <h1>{category.categoryName}</h1>
        <div className="container">
          {category.project.map((project, index) => (
            <Link to={`/project/${project.slug}`} key={index}>
              <article>
                <GatsbyImage
                  image={getImage(project.projectThumbnail)}
                  key={index}
                  alt="Project Thumbnail Image"
                />
                <h3>{project.projectName}</h3>
              </article>
            </Link>
          ))}
        </div>
      </CategoryStyling>
    </Layout>
  );
};

export default CategoryPage;
export function Head({ data }: HeadProps<GraphQlResult>) {
  const { seoTitle, seoDescription } = data.contentfulCategory
  return (
    <SEO siteData={{ seoTitle: seoTitle, seoDescription: seoDescription }} />
  );
}

//GraphQl query
export const AllAboutQury = graphql`
  query MyQuery($slug: String) {
    contentfulCategory(slug: { eq: $slug }) {
      categoryName
      project {
        projectName
        projectThumbnail {
          gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
        }
        slug
      }
      seoDescription
      seoTitle
    }
  }
`;
