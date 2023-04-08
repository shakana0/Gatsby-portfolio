import * as React from "react";
import { PageProps, HeadProps, Link } from "gatsby";
import { SingleProjectStyling } from "../assets/styles/SingleProjectStyling";
import { graphql } from "gatsby";
import { projectDataType } from "../interface/pageInterface";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

type GraphQlResult = {
  contentfulProject: projectDataType;
};

const SingleProjectPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const projectData = data.contentfulProject;
  return (
    <Layout>
      <SingleProjectStyling>
        <button className="back-btn" onClick={() => window.history.back()}>
          <ArrowBackIosIcon className="back-icon" />
        </button>
        <h1>{projectData.projectName}</h1>
        <article>
          <section>
            <p>{projectData.description.description}</p>
            <a
              href={projectData.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Check out Project!</button>
            </a>
          </section>
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
            modules={[Autoplay, Pagination]}
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
          <section className="technologies">
            <h2>Technologies</h2>
            <ul>
              {projectData.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </section>
        </article>
      </SingleProjectStyling>
    </Layout>
  );
};

export default SingleProjectPage;
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
      technologies
      description {
        description
      }
      projectUrl
      seoDescription
    }
  }
`;
