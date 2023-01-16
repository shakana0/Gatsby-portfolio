import React from "react";
import type { PageProps, HeadProps } from "gatsby";
import { ContactStyling } from "../assets/styles/ContactStyling";
import { graphql } from "gatsby";
import { ContactPageDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";

type GraphQlResult = {
  allContentfulContactPage: {
    edges: {
      node: ContactPageDataType;
    }[];
  };
};

const ContactPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const contactData = data.allContentfulContactPage.edges[0];
  return (
    <Layout>
      <ContactStyling>
        <h1>{contactData.node.pageName}</h1>
        <div className="container">
          <section className="profile-img-container">
            <GatsbyImage
              image={getImage(contactData.node.profileImage)}
              alt="Profile Image"
            />
          </section>
          <section className="contact-info">
            {contactData.node.contactInformation.map((info, index) => (
              <a
                href={info.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <GatsbyImage
                  image={getImage(info.socialMediaIcon)}
                  alt="Social media Icon"
                />
              </a>
            ))}
          </section>
        </div>
      </ContactStyling>
    </Layout>
  );
};

export default ContactPage;
export function Head({ data }: HeadProps<GraphQlResult>) {
  const { seoTitle, seoDescription } =
    data.allContentfulContactPage.edges[0].node;
  return (
    <SEO siteData={{ seoTitle: seoTitle, seoDescription: seoDescription }} />
  );
}

//GraphQl query
export const AllContactQury = graphql`
  query MyQuery {
    allContentfulContactPage {
      edges {
        node {
          pageName
          profileImage {
            gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
          }
          contactInformation {
            socialMediaIcon {
              gatsbyImageData(formats: [JPG, WEBP, AVIF], placeholder: BLURRED)
            }
            socialMediaLink
            contactInfoName
          }
          seoDescription
          seoTitle
        }
      }
    }
  }
`;
