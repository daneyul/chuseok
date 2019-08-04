
const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    const postTemplate = path.resolve('src/templates/post.js')

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        keywords
                        title
                        side
                        tagline
                        sidebar
                        sidebar1
                        sidebar2
                        type
                        cap
                    }
                }
            }
        }
    }`)

    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}