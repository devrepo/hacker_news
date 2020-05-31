import React from 'react';
import styled from 'styled-components';

const UpVoteButtonIcon = styled.div`
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid black;
    color: #fff;
    cursor: pointer;
    display: inline;
`;

const UpVoteButtonContainer = styled.div`
    top: -11px;
    position: relative;
    display: inline;
    padding: 4px 6px 4px 4px;
`;

const UpVoteButton = (props) => {
    return (
        <UpVoteButtonContainer onClick={props.onClick}>
            <UpVoteButtonIcon />
        </UpVoteButtonContainer>
    )
}

export default UpVoteButton;