import React from 'react';

export default class Adh extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <ins class="adsbygoogle adh"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2932074618261080"
        data-ad-slot="9548852695"
        data-full-width-responsive="true"></ins>
    )
  }
}
