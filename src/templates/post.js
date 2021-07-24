import React from 'react';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Adv from "../components/vertical";
import Adh from "../components/horizontal";
import '../styles/blog.scss';
import '../styles/landing.scss';
import '../styles/footer.scss';
import SocialIcon from '../components/social';

export default function Template({ data }) {
    const { markdownRemark: post } = data;

    if (post.frontmatter.path === "/drinks") {
        const sidebar1 = post.frontmatter.sidebar1;
        const sidebar2 = post.frontmatter.sidebar2;
        return (
            <React.Fragment>
                <SEO title={post.frontmatter.title} />
                <Nav />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-center slide-in-bottom--1">
                        <div class="col-12 header-mb__foods">
                            <h2 class="landing-category text-center"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h4 class="blog-header text-center"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                            <h2 class="text-center header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center slide-in-bottom--2">
                        <div class="col-12">
                            {post.frontmatter.featuredImage
                                && (
                                    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                )}
                                <div class="blog-p mt-3 d-flex justify-content-between">
                                    <p class="blog-cap">
                                        {post.frontmatter.cap}
                                    </p>
                                    <div class="d-flex">
                                        <SocialIcon
                                            path={window.location.href}
                                            title={post.frontmatter.tagline}
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="row justify-content-between slide-in-bottom--2 blog-p">
                        <div class="col-blog--main blog-main">
                            <article class="drop-cap" dangerouslySetInnerHTML={{ __html: post.html }} />
                            <SocialIcon
                                path={window.location.href}
                                title={post.frontmatter.tagline}
                            />
                        </div>
                        <ul class="col-blog blog-sidebar">
                            <li class="blog-sidebar__list blog-header--3">Alcoholic</li>
                            {sidebar1.map((value) => { return <a href={value[2]}><li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li></a> })}
                            <li class="blog-sidebar__list blog-header--3">Non-alcoholic</li>
                            {sidebar2.map((value) => { return <a href={value[2]}><li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li></a> })}
                            <Adv />
                        </ul>
                    </div>

                </div>
                <div class="col-10">
                    <Adh />
                </div>
                <Footer />
            </React.Fragment>
        )
    } else if (post.frontmatter.path === "/foods" || post.frontmatter.path === "/places" || post.frontmatter.path === "/snacks") {
        const sidebar = post.frontmatter.sidebar;
        return (
            <React.Fragment>
                <SEO title={post.frontmatter.title} />
                <Nav />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-center slide-in-bottom--1">
                        <div class="col-12 header-mb__foods">
                            <h2 class="landing-category text-center"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h4 class="blog-header text-center"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                            <h2 class="text-center header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center slide-in-bottom--2">
                        <div class="col-12">
                            {post.frontmatter.featuredImage
                                && (
                                    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                )}
                            <div class="blog-p mt-3 d-flex justify-content-between">
                                <p class="blog-cap">
                                    {post.frontmatter.cap}
                                </p>
                                <div class="d-flex">
                                    <SocialIcon
                                        path={window.location.href}
                                        title={post.frontmatter.tagline}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between slide-in-bottom--2 blog-p">
                        <div class="col-blog--main blog-main">
                            <article class="drop-cap" dangerouslySetInnerHTML={{ __html: post.html }} />
                            <SocialIcon
                                path={window.location.href}
                                title={post.frontmatter.tagline}
                            />
                        </div>
                        <ul class="col-blog blog-sidebar">
                            {sidebar.map((value) => { return <a href={value[2]}><li class="blog-sidebar__list blog-box">{value[0]}<br />{value[1]}</li></a> })}
                            <Adv />
                        </ul>
                    </div>
                </div>
                <div class="col-10">
                    <Adh />
                </div>
                <Footer />
            </React.Fragment>
        )
    } else if (post.frontmatter.path === "/greetings") {
        return (
            <React.Fragment>
                <SEO title={post.frontmatter.title} />
                <Nav />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-center slide-in-bottom--1">
                        <div class="col-12 header-mb__foods">
                            <h2 class="landing-category text-center"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h4 class="blog-header text-center"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                            <h2 class="text-center header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center slide-in-bottom--2">
                        <div class="col-12">
                            {post.frontmatter.featuredImage
                                && (
                                    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                )}
                            <div class="blog-p mt-3 d-flex justify-content-between">
                                <p class="blog-cap">
                                    {post.frontmatter.cap}
                                </p>
                                <div class="d-flex">
                                    <SocialIcon
                                        path={window.location.href}
                                        title={post.frontmatter.tagline}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center blog-p">
                        <div class="col-blog--main blog-main--borderless">
                            <article class="slide-in-bottom--2" dangerouslySetInnerHTML={{ __html: post.html }} />
                        </div>
                    </div>

                </div>
                <div class="col-10">
                    <Adh />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <SEO title={post.frontmatter.title} />
                <Nav />
                <div class="container blog-hide">
                    <div class="row blog-header--margin justify-content-center slide-in-bottom--1">
                        <div class="col-12 header-mb__foods">
                            <h2 class="landing-category text-center"><span class="landing-category--dotted">{post.frontmatter.type}</span></h2>
                            <h4 class="blog-header text-center"><span class="blog-header blog-header--title">{post.frontmatter.title}</span></h4>
                            <h2 class="text-center header-mb__foods-2 blog-tagline">{post.frontmatter.tagline}</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center slide-in-bottom--2">
                        <div class="col-12">
                            {post.frontmatter.featuredImage
                                && (
                                    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                )}
                            <div class="blog-p mt-3 d-flex justify-content-between">
                                <p class="blog-cap">
                                    {post.frontmatter.cap}
                                </p>
                                <div class="d-flex">
                                    <SocialIcon
                                        path={window.location.href}
                                        title={post.frontmatter.tagline}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center blog-p">
                        <div class="col-blog--main blog-main--borderless">
                            <article class="drop-cap slide-in-bottom--2" dangerouslySetInnerHTML={{ __html: post.html }} />
                            <SocialIcon
                                path={window.location.href}
                                title={post.frontmatter.tagline}
                            />
                        </div>
                    </div>

                </div>
                <div class="col-10">
                    <Adh />
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