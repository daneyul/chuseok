import React from 'react'
import Facebook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Linkedin from '../images/linkedin.svg'

function facebookLink(path) {
 return `https://www.facebook.com/sharer/sharer.php?u=chuseok.info${path}`
}

function twitterLink(path, title) {
  return `https://twitter.com/intent/tweet?url=chuseok.info${path}&text=${title}`
}

function linkedinLink(path) {
  return `https://www.linkedin.com/shareArticle?mini=true&url=$chuseok.info${path}`
}

const SocialIcon = (props) => {
      return (
        <div>
          <a href={facebookLink(props.path)} class="mr-1"><img src={Facebook} alt="Facebook" /></a>
          <a href={twitterLink(props.path, props.title)} class="ml-1 mr-1"><img src={Twitter} alt="Twitter" /></a>
          <a href={linkedinLink(props.path)} class="ml-1"><img src={Linkedin} alt="Linkedin" /></a>
        </div>
      )
  }

export default SocialIcon