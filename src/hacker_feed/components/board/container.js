import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions';
import BoardUI from './ui';
import { getFeeds } from '../../selectors';

class Board extends React.Component {
    componentDidMount() {
        this.props.getFeeds(this.props.boardId);
    }

    render() {
        const { loading, error } = this.props;
        return (
            <span>
                <BoardUI {...this.props} />
            </span>
        );
    }
}

Board.propTypes = {
    getFeeds: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string
};

Board.defaultProps = {
    loading: false
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFeeds: (boardId) => {
            dispatch(actions.getFeeds(boardId));
        }
    };
};

export default connect((state) => getFeeds(state), mapDispatchToProps)(Board);
