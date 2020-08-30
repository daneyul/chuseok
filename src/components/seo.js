/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"

const SEO = () => {

  return (

    <Helmet>
      <title>Chuseok 2020 - Korean Thanksgiving</title>
      <meta name="title" content="Chuseok 2020 - Korean Thanksgiving" />
      <meta name="description" content="Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.chuseok.info/" />
      <meta property="og:title" content="Chuseok 2020 - Korean Thanksgiving" />
      <meta property="og:description" content="Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok." />
      <meta property="og:image" content="../images/meta.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.chuseok.info/" />
      <meta property="twitter:title" content="Chuseok 2020 - Korean Thanksgiving" />
      <meta property="twitter:description" content="Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok." />
      <meta property="twitter:image" content="../images/meta.jpg" />

      <meta name="google-site-verification" content="uBCJmhGIikyn42LWcE7snU_HuWbhpcgKnb41RyvER40" />

      <script data-ad-client="ca-pub-2932074618261080" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>

  )
}


export default SEO