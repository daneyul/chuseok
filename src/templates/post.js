import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Adv from "../components/vertical";
import Adh from "../components/horizontal";
import Ads from "../components/square";
import '../styles/blog.scss';
import '../styles/landing.scss';
import '../styles/footer.scss';

export default function Template({data}) {
    const {markdownRemark: post} = data;

    if (post.frontmatter.path == "/drinks" ) {
        const sidebar1 = post.frontmatter.sidebar1;
        const sidebar2 = post.frontmatter.sidebar2;
        const keywords = post.frontmatter.keywords;
        return (
            <React.Fragment>
            <Nav />
            <SEO title={post.frontmatter.title} keywords={keywords} />
            <div class="container blog-hide">
                <div class="row blog-header--margin justify-content-start slide-in-bottom--1">
                    <div class="col-12 header-mb__foods nav-space">
                        <h4 class="blog-leader--first blog-header text-left"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                    </div>
                </div>
                <div class="row slide-in-bottom--1">
                    <div class="col-12">
                        <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                        <h2 class="landing-category--first header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                    </div>
                </div>
                <div class="row blog-header-mb slide-in-bottom--2">
                    <div class="col-12">
                        {post.frontmatter.featuredImage
                        && (
                            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                        )}
                        <p class="blog-cap blog-main mt-3">{post.frontmatter.cap}</p>
                    </div>
                </div>
                <div class="row justify-content-between slide-in-bottom--2">
                    <div class="col-blog--main blog-main">
                        <article class="drop-cap" dangerouslySetInnerHTML={{__html: post.html}} />
                    </div>
                    <ul class="col-blog blog-sidebar">
                            <li class="blog-sidebar__list blog-header--3">Alcoholic</li>
                            {sidebar1.map( (value) => { return <a href={value[2]}><li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li></a> } ) }
                            <li class="blog-sidebar__list blog-header--3">Non-alcoholic</li>
                            {sidebar2.map( (value) => { return <a href={value[2]}><li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li></a> } ) }
                            <Adv />
                    </ul>
                </div>
            </div>
            <Footer />
            </React.Fragment>
        )
        } else if (post.frontmatter.path == "/foods"){
            const sidebar = post.frontmatter.sidebar;
            const keywords = post.frontmatter.keywords;
            return (
                <React.Fragment>
                <Nav />
                <SEO title={post.frontmatter.title} keywords={keywords} />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-start slide-in-bottom--1">
                        <div class="col-12 header-mb__foods nav-space">
                            <h4 class="blog-leader--first blog-header text-left"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                        </div>
                    </div>
                    <div class="row slide-in-bottom--1">
                        <div class="col-12">
                            <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h2 class="landing-category--first header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row blog-header-mb slide-in-bottom--2">
                        <div class="col-12">
                        {post.frontmatter.featuredImage
                        && (
                            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                        )}
                            <p class="blog-cap blog-main mt-3">{post.frontmatter.cap}</p>
                        </div>
                    </div>
                    <div class="row justify-content-between slide-in-bottom--2">
                        <div class="col-blog--main blog-main">
                            <article class="drop-cap" dangerouslySetInnerHTML={{__html: post.html}} />
                        </div>
                        <ul class="col-blog blog-sidebar">
                                {sidebar.map( (value) => { return <a href={value[2]}><li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li></a> } ) }
                                <Adv />
                        </ul>
                    </div>
                </div>
                <Footer />
                </React.Fragment>
            )
        } else if (post.frontmatter.path == "/greetings"){
            const keywords = post.frontmatter.keywords;
            return (
                <React.Fragment>
                <Nav />
                <SEO title={post.frontmatter.title} keywords={keywords} />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-start slide-in-bottom--1">
                        <div class="col-12 header-mb__foods nav-space">
                            <h4 class="blog-leader--first blog-header text-left"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                        </div>
                    </div>
                    <div class="row slide-in-bottom--1">
                        <div class="col-12">
                            <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h2 class="landing-category--first header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row blog-header-mb slide-in-bottom--2">
                        <div class="col-12">
                        {post.frontmatter.featuredImage
                        && (
                            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                        )}
                            <p class="blog-cap blog-main mt-3">{post.frontmatter.cap}</p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-blog--main blog-main">
                            <article class="slide-in-bottom--2" dangerouslySetInnerHTML={{__html: post.html}} />
                        </div>
                        <div class="col-blog blog-sidebar">
                            <Adv />
                        </div>
                    </div>
                </div>
                <Footer />
                </React.Fragment>
            )
        }
        else {
            const keywords = post.frontmatter.keywords;
            return (
                <React.Fragment>
                <Nav />
                <SEO title={post.frontmatter.title} keywords={keywords} />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-start slide-in-bottom--1">
                        <div class="col-12 header-mb__foods nav-space">
                            <h4 class="blog-leader--first blog-header text-left"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                        </div>
                    </div>
                    <div class="row slide-in-bottom--1">
                        <div class="col-12">
                            <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h2 class="landing-category--first header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row blog-header-mb slide-in-bottom--2">
                        <div class="col-12">
                        {post.frontmatter.featuredImage
                        && (
                            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                        )}
                            <p class="blog-cap blog-main mt-3">{post.frontmatter.cap}</p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-blog--main blog-main">
                            <article class="drop-cap slide-in-bottom--2" dangerouslySetInnerHTML={{__html: post.html}} />
                        </div>
                        <div class="col-blog blog-sidebar">
                            <Adv />
                        </div>
                    </div>
                </div>
                <Footer />
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
                keywords
                title
                side
                tagline
                sidebar
                sidebar1
                sidebar2
                type
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                cap
            }
        }
    }
`

if(typeof window != "undefined"){
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }