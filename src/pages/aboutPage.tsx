import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AboutPageStyling } from "../assets/styles/AboutPageStyling";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { AboutMeDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";


type GraphQlResult = {
  allContentfulAboutMePage: {
    edges: {
      node: AboutMeDataType;
    }[];
  };
};

const AboutPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const aboutMeData = data.allContentfulAboutMePage.edges[0];
  const richText = aboutMeData.node;

  const options: object = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: object, children: string) => <p>{children}</p>,
    },
  };
  return (
    <Layout>
      {/* <Nav /> */}
      <AboutPageStyling>
      <h1>{aboutMeData.node.pageName}</h1>
        <div className="container">
          <section className="info">
            <article>
              {renderRichText(richText.presentationText, options)}
            </article>
            <section className="education">
              <h2>Education</h2>
              {aboutMeData.node.education.map((education, index) => (
                <div key={index}>
                  <h4>{education.schoolName}</h4>
                  <p>{education.degree}</p>
                  <p>{education.subjectArea}</p>
                  <span className="date">
                    <p>{education.startDate}</p>—<p>{education.endDate}</p>
                  </span>
                </div>
              ))}
            </section>
            <section className="experience">
              <h2>Experience</h2>
              {aboutMeData.node.experience.map((experience, index) => (
                <div key={index}>
                  <h4>{experience.role}</h4>
                  <p>{experience.companyName}</p>
                  <p>{experience.employmentType}</p>
                  {/* <li>{experience.location}</li> */}
                  <span className="date">
                    <p>{experience.startDate}</p>—<p>{experience.endDate}</p>
                  </span>
                  <p className="job-description">
                    {experience.jobDescription.jobDescription}
                  </p>
                </div>
              ))}
            </section>
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <ul>
              {aboutMeData.node.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </AboutPageStyling>
    </Layout>
  );
};

export default AboutPage;
export const Head: HeadFC = () => <title>About Page</title>;

//GraphQl query
export const AllAboutQury = graphql`
  query MyQuery {
    allContentfulAboutMePage{
      edges {
        node {
          pageName
          presentationText {
            raw
          }
          education {
            schoolName
            degree
            subjectArea
            startDate(fromNow: false)
            endDate(formatString: "")
          }
          experience {
            role
            companyName
            employmentType
            location {
              lat
              lon
            }
            startDate(fromNow: false)
            endDate(fromNow: false)
            jobDescription {
              jobDescription
            }
          }
          skills
        }
      }
    }
  #   allContentfulEducation(sort: {endDate: DESC, }) {
  #   edges {
  #     node {
  #       schoolName
  #       endDate
  #     }
  #   }
  # }
  }
`;
