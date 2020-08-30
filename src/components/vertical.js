import React from 'react';

export default class Adv extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render() {
        return (
            <ins class="adsbygoogle adv"
                data-ad-client="ca-pub-2932074618261080"
                data-ad-slot="5332321809"
                data-full-width-responsive="true"></ins>
        )
    }
}