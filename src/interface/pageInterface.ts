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
    gatsbyImageData: gatsbyImageDataType;

    // placeholderUrl: string;
    // gatsbyImageData: {
    //   images: {
    //     sources: [
    //       {
    //         srcSet: string;
    //         sizes: string;
    //         type: string;
    //       }
    //     ];
    //     fallback: {
    //       src: string;
    //       srcSet: string;
    //     };
    //   };
    //   placeholder: {
    //     fallback: string;
    //     width: number;
    //     height: number;
    //   };
    // };
  };
  desktopHeroImage: {
    gatsbyImageData: gatsbyImageDataType;
    // gatsbyImageData: {
    //   images: {
    //     sources: [
    //       {
    //         srcSet: string;
    //         sizes: string;
    //         type: string;
    //       }
    //     ];
    //     fallback: {
    //       src: string;
    //       srcSet: string;
    //     };
    //   };
    //   placeholder: {
    //     fallback: string;
    //     width: number;
    //     height: number;
    //   };
    // };
  };
  presentationText: string;
  // extensions: object;
  seoDescription: string;
  seoTitle: string;
}

// allContentfulAboutMePage interface
export interface AboutMePageDataType {
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
  seoDescription: string;
  seoTitle: string;
  skillIcons: [
    {
      skillTitle: string;
      icon:{
        file: {
          url: string;
        };
      }
    }
  ];
}

// allContentfulContactPage interface
export interface ContactPageDataType {
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
      contactInfoName: string
    }
  ];
  seoDescription: string;
  seoTitle: string;
}

//allContentfulProjectsPage interface
export interface projectsPageDataType {
  pageName: string;
  seoDescription: string;
  seoTitle: string;
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
  technologies: [string];
  description: {
    description: string;
  };
  projectUrl: string;
  seoDescription: string;
}

//ContentfulCategory interface
export interface categoryData {
  seoDescription: string;
  seoTitle: string;
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

// export interface allMarkdownRemarkDataType {
//   id: number;
//   path: string;
//   title: string;
//   body: string;
// }


