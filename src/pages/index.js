import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      {data.allFile.nodes.map((file) => {
        const image = getImage(file);
        return <GatsbyImage image={image} />;
      })}
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allFile {
      nodes {
        publicURL
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
