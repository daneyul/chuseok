import React from 'react';

export default class Adh extends React.Component {
  componentDidMount () {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  render () {
    return (
      <React.Fragment>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins class="adsbygoogle ad-hor"
            data-ad-client="ca-pub-2932074618261080"
            data-ad-slot="9548852695"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
      </React.Fragment>
    )
  }
}
