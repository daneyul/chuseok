import React from 'react';
import Nav from "../components/nav";
import Footer from "../components/footer";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/blog.scss';
import '../styles/landing.scss';

const PrivacyPage = () => (
    <React.Fragment>
    <Nav />
    <div class="container">

        <div class="row blog-header--margin justify-content-start slide-in-bottom--1">
            <div class="col-12 header-mb__foods nav-space">
                <h4 class="blog-leader--first blog-header text-left"><span class="blog-header blog-header--title">Privacy Policy</span></h4>
            </div>
        </div>

        <div class="row slide-in-bottom--1">
            <div class="col-12">
                <h2 class="landing-category--first mb-4"><span class="landing-category--dotted">Legal</span></h2>
                <h2 class="landing-category--first header-mb__foods-2 blog-tagline">Last updated August 1, 2019</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 col-md-10 blog-main2">
                <div class="slide-in-bottom--2">
                <p>Your privacy is important to us. It is Chuseok Info's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://chuseok.info"><u>https://chuseok.info</u></a>, and other sites we own and operate.</p>
                <p>As the owner and operator of chuseok.info (the "Website") hereafter referred to in this Privacy Policy as "Chuseok", "us", "our" or "we", we have provided this Privacy Policy to explain how we collect, use, share and protect information about the users of our Website (hereafter referred to as “user”, “you” or "your"). For the purposes of this Agreement, any use of the terms "Chuseok", "us", "our" or "we" includes Chuseok Info, without limitation.</p>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
                <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                <p>This policy is effective as of August 1, 2019.</p>
            </div>
            </div>
            </div>

        </div>

    <Footer />
    </React.Fragment>
)

export default PrivacyPage
