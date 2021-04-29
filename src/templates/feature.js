import React from "react";
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const FeatureTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h1>
      {helmet || ""}
      <PostContent content={content} />
    </section>
  );
};

const Feature = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FeatureTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Feature">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

Feature.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Feature;

export const pageQuery = graphql`
  query FeatureByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
