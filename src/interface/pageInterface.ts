import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "../../node_modules/gatsby-source-contentful/rich-text";

interface gatsbyImageDataType {
  images: {
    sources: [
      {
        srcSet: string;
        sizes: string;
        type: string;
      }
    ];
    fallback: {
      src: string;
      srcSet: string;
    };
  };
  placeholder: {
    fallback: string;
    width: number;
    height: number;
  };
}

// allContentfulHomePage interface
export interface HomePageDataType {
  heading: string;
  mobileHeroImage: {
    placeholderUrl: string;
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet: string;
            sizes: string;
            type: string;
          }
        ];
        fallback: {
          src: string;
          srcSet: string;
        };
      };
      placeholder: {
        fallback: string;
        width: number;
        height: number;
      };
    };
  };
  desktopHeroImage: {
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet: string;
            sizes: string;
            type: string;
          }
        ];
        fallback: {
          src: string;
          srcSet: string;
        };
      };
      placeholder: {
        fallback: string;
        width: number;
        height: number;
      };
    };
  };
  presentationText: string;
  extensions: object;
}

// allContentfulAboutMePage interface
export interface AboutMeDataType {
  pageName: string;
  presentationText: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  // presentationText: any
  education: [
    {
      schoolName: string;
      degree: string;
      subjectArea: string;
      startDate: number;
      endDate: number;
    }
  ];
  experience: [
    {
      role: string;
      companyName: string;
      employmentType: string;
      location: {
        lat: number;
        lon: number;
      };
      startDate: number;
      endDate: number;
      jobDescription: {
        jobDescription: string;
      };
    }
  ];
  skills: string[];
}

// allContentfulContactPage interface
export interface ContactDataType {
  pageName: string;
  profileImage: {
    gatsbyImageData: gatsbyImageDataType;
  };
  contactInformation: [
    {
      socialMediaIcon: [
        {
          gatsbyImageData: gatsbyImageDataType;
        }
      ];
      socialMediaLink: string;
    }
  ];
}

//allContentfulProject interface
export interface projectDataType {
  projectName: string;
  slug: string;
  projectThumbnail: {
    gatsbyImageData: gatsbyImageDataType;
  };
  projectScreenshots: [
    {
      gatsbyImageData: gatsbyImageDataType;
    }
  ];
  description: {
    description: string;
  };
  projectUrl: string;
}

//ContentfulCategory interface
export interface categoryData {
  categoryName: string;
  slug: string;
  project: [
    {
      projectName: string;
      projectThumbnail: {
        gatsbyImageData: gatsbyImageDataType;
      };
      slug: string;
    }
  ];
}

export interface allMarkdownRemarkDataType{
  id: number
  path: string,
  title: string,
  body: string,
}