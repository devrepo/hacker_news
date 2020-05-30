import React from 'react';
//import PropTypes from 'prop-types';

import Feeds from '../feed';
import Pagination from './pagination';

const BoardUI = (props) => {
    return (
        <div>
            <Feeds {...props} />
            <Pagination {...props}/>
        </div>
    );
};


export default BoardUI;
