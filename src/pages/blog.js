import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const Blog = ({ data }) => (
    <Layout>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
                <hr />
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted by { post.node.frontmatter.author } on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
            </div>
        ))}
        <hr/>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                    path
                    date
                    author
                    title
                    }
                }
            }
        }
    }
`

export default Blog;