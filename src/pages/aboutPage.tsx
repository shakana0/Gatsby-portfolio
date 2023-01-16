import React from "react";
import type { PageProps, HeadProps } from "gatsby";
import { AboutPageStyling } from "../assets/styles/AboutPageStyling";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { AboutMePageDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

type GraphQlResult = {
  allContentfulAboutMePage: {
    edges: {
      node: AboutMePageDataType;
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
      <AboutPageStyling>
        <section className="container">
          <section className="info">
            <h1>{aboutMeData.node.pageName}</h1>
            <article>
              {renderRichText(richText.presentationText, options)}
            </article>
          </section>
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

        <div className="skills-wrapper">
          <h1>Skills</h1>
          <ul className="skill-container">
            {aboutMeData.node.skillIcons.map((skill, index) => (
              <li className="skill" key={index}>
                <img
                  src={skill.icon.file.url}
                  alt={`${skill.skillTitle} icon`}
                  height="50px"
                />
                <p>{skill.skillTitle}</p>
              </li>
            ))}
          </ul>
          <section className="other-skills">
            <h2>Other Skills</h2>
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
// export const Head: HeadFC = () => <title>About Page</title>;

export function Head({ data }: HeadProps<GraphQlResult>) {
  const { seoTitle, seoDescription } =
    data.allContentfulAboutMePage.edges[0].node;
  return (
    <SEO siteData={{ seoTitle: seoTitle, seoDescription: seoDescription }} />
  );
}

//GraphQl query
export const AllAboutQury = graphql`
  query MyQuery {
    allContentfulAboutMePage {
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
          seoDescription
          seoTitle
          skillIcons {
            skillTitle
            icon {
              file {
                url
              }
            }
          }
          # skillIcons {
          # file {
          #   url
          # }
        }
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
`;
