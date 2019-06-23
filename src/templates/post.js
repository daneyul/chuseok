import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from "gatsby";
import Nav from "../components/nav";
import '../styles/blog.scss';

export default function Template({data}) {
    const {markdownRemark: post} = data;
    if (post.frontmatter.side == true) {
          const sidebar = post.frontmatter.sidebar;
            return (
                <React.Fragment>
                <Nav />
                <div class="container">
                    <div class="row blog-header--margin justify-content-center">
                        <div class="col-12 header-mb__foods nav-space">
                            <h4 class="blog-leader--first blog-header text-right"><span class="blog-header--title">{post.frontmatter.title}</span></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">blog</span></h2>
                            <h2 class="landing-category--first header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                            
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-blog--main blog-main">
                            <p class="drop-cap" dangerouslySetInnerHTML={{__html: post.html}} />
                        </div>
                        <ul class="col-blog blog-sidebar">
                                {sidebar.map( (value) => { return <li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li> } ) }
                        </ul>
                    </div>
                </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                <Nav />
                <div class="container">
                    <div class="row blog-header--margin justify-content-center">
                        <div class="col-12 header-mb__foods nav-space">
                            <h4 class="blog-leader--first blog-header text-right"><span class="blog-header--title">{post.frontmatter.title}</span></h4>
                        </div>
                        <div class="col-12">
                            <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">Tradition</span></h2>
                            <h2 class="landing-category--first header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                            
                        </div>
                        <div class="col-10 blog-main2">
                            <p class="drop-cap" dangerouslySetInnerHTML={{__html: post.html}} />
                        </div>
                    </div>
                </div>
                </React.Fragment>
            )
        }
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }) {
            html
            frontmatter {
                path
                title
                side
                tagline
                sidebar
            }
        }
    }
`