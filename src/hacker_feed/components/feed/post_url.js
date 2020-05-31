import React from 'react';
import AnchorButton from '../common/anchor_button';

const stripDomain = (url) => {
    if (url){
        return url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
    }
    return "";
}

const PostURL = (props) => {
    return (
        <AnchorButton className="gray-text">
            ({stripDomain(props.url)})
        </AnchorButton>
    )
}

export default PostURL;