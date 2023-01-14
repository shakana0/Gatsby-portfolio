import * as React from "react";
import type { PageProps, HeadProps } from "gatsby";
import { SingleProjectStyling } from "../assets/styles/SingleProjectStyling";
import { graphql } from "gatsby";
import { projectDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Pagination , Navigation, Scrollbar, A11y} from "swiper";

type GraphQlResult = {
  contentfulProject: projectDataType;
};
const hej = ["hej", "på", "dig"]

const SingleProjectPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const projectData = data.contentfulProject;
  return (
    <Layout>
      <SingleProjectStyling>
        <h1>{projectData.projectName}</h1>
        <article>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projectData.projectScreenshots.map((screenshot, index) => (
                <SwiperSlide key={index} className="Swiper-slide">
                  <GatsbyImage
                    image={getImage(screenshot)}
                    key={index}
                    alt="Project Screenshot Image"
                  />
                </SwiperSlide>
              ))}
      </Swiper>
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
// export const Head: HeadFC = () => <title>Project Page</title>;
export function Head({ data }: HeadProps<GraphQlResult>) {
  const { projectName, seoDescription } = data.contentfulProject;
  return (
    <SEO siteData={{ seoTitle: projectName, seoDescription: seoDescription }} />
  );
}

//GraphQl query
export const SingleProjecttQury = graphql`
  query MyQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      projectName
      projectScreenshots {
        gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
      }
      description {
        description
      }
      projectUrl
      seoDescription
    }
  }
`;
