import React from 'react';
//import PropTypes from 'prop-types';

import Feeds from '../feed';
import Pagination from './pagination';
import VoteChart from '../vote_chart';

const BoardUI = (props) => {
    return (
        <div>
            <Feeds {...props} />
            <Pagination {...props}/>
            <VoteChart {...props} />
        </div>
    );
};


export default BoardUI;
