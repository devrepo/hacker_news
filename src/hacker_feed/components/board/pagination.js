import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    return (
        <div className="pagination level">
            <div className="level-right">
                <span className="level-item">
                    <button className="paginator-button" data-testid="previous" onClick={props.onPrevious}>Previous</button> | <button className="paginator-button" data-testid="next" onClick={props.onNext}>Next</button>
                </span>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    onPrevious : PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
}

export default Pagination;