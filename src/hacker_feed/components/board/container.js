import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import querySearch from "stringquery";

import actions from '../../actions';
import BoardUI from './ui';
import { getFeeds } from '../../selectors';
import Loader from './loader';
import Error from './error';


class Board extends React.Component {

    constructor(props){
        super(props);
        const searchParams = querySearch(props.location.search);
        this.state = {
            page: searchParams.page || 0
        }
        this.onPrevious = this.onPrevious.bind(this);
        this.onNext = this.onNext.bind(this);
    }
    componentDidMount() {
        const {page } = this.state;
        this.props.getFeeds(page);
    }

    onPrevious(){
        let {page } = this.state;
        if (page > 0){
            page--;
            this.setState({page: page});
            this.props.history.push(`/?page=${page}`);
            this.props.getFeeds(page);
        }
    }

    onNext(){
        let {page } = this.state;
        page++;
        this.setState({page: page});
        this.props.history.push(`/?page=${page}`);
        this.props.getFeeds(page);
    }

    render() {
        const { loading, error } = this.props;
        return (
            <span>
                <BoardUI {...this.props} onPrevious={this.onPrevious} onNext={this.onNext} />
                <Loader visible={loading} />
                <Error visible={error}>{error}</Error>
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
        getFeeds: (pageNum) => {
            dispatch(actions.getFeeds(pageNum));
        }
    };
};

export default connect((state) => getFeeds(state), mapDispatchToProps)(Board);
