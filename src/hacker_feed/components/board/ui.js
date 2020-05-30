import React from 'react';

import Header from './header';

const BoardUI = (props) => {
    return (
        <div>
            <Header data-testid="header">Board</Header>
            {props.children}
        </div>
    );
};


export default BoardUI;
