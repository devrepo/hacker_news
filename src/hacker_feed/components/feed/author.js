import React from 'react';
import AnchorButton from '../common/anchor_button';
const Author = (props) => {
    return (
        <AnchorButton>
            { props.author }
        </AnchorButton>
    )
}

export default Author;