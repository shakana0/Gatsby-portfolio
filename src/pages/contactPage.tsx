import React, { useContext } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ContactStyling } from "../assets/styles/ContactStyling";
import { graphql } from "gatsby";
import { ContactDataType } from "../interface/pageInterface";
import { Layout } from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GlobalStateContext } from "../context/GlobalContextProviser";


type GraphQlResult = {
  allContentfulContactPage: {
    edges: {
      node: ContactDataType;
    }[];
  };
};

const ContactPage: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const contactData = data.allContentfulContactPage.edges[0];
  const globalStateContext: any = useContext(GlobalStateContext);

  console.log(globalStateContext, "globalcontext");
  return (
    <Layout>
      <ContactStyling>
        <h1>{contactData.node.pageName}</h1>
        <div className="container">
          <section className="profile-img-container">
            {/* <img src={contactData.node.profileImage.file.url} alt="Profile Image" /> */}
            <GatsbyImage
              image={getImage(contactData.node.profileImage)}
              alt="Profile Image"
            />
          </section>
          <section className="contact-info">
            {contactData.node.contactInformation.map((info, index) => (
              <span key={index}>
                {/* <img src={info.socialMediaIcon.file.url} alt="" /> */}
                <GatsbyImage
                  image={getImage(info.socialMediaIcon)}
                  key={index}
                  alt="Social media Icon"
                />

                <a href="#">{info.socialMediaLink}</a>
              </span>
            ))}
          </section>
        </div>
      </ContactStyling>
    </Layout>
  );
};

//<a target="_blank" href="https://icons8.com/icon/85911/iphone-se">iPhone SE</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>;

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
          }
        }
      }
    }
  }
`;
