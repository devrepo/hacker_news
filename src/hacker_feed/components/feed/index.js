import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions';
import UpVoteButton from './upvote_button';
import Header from './header';
import Author from './author';
import PostURL from './post_url';
import TimeElapsed from './time';
import HidePost from './hide';


class Feeds extends React.Component {
    constructor (props){
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleUpVote(index){
        this.props.upVoteFeed(index);
    }

    handleHide(hit){
        //Could not find Hide api
    }

    layoutFeeds(hits){
        const feed = hits && hits.map ( (hit, index) => {
            const className = (index % 2) ? "dark-gray-background": "gray-background"
            return (
                <div key={hit.objectID} className={className} >
                    <div className="columns is-bottom-aligned is-text-centered is-mobile">
                        <div className="column is-1-desktop is-2-mobile">
                            {hit.num_comments}
                        </div>
                        <div className="column is-1-desktop is-2-mobile">
                            {hit.points}
                        </div>
                        <div className="column is-1-desktop is-2-mobile">
                            <UpVoteButton onClick={()=> this.handleUpVote(index)}/>
                        </div>
                        <div className="column is-9-desktop is-6-mobile is-left-aligned">
                            <span className="title-text">{hit.title} </span>
                            <PostURL {...hit} />
                            <span className="gray-text"> by </span> 
                            <Author {...hit}/> 
                            <TimeElapsed {...hit} /> 
                            <HidePost onHide={this.handleHide}/>
                        </div>
                    </div>
                </div>)
        })
        return feed;
    }

    layoutMobileFeed(hits){
        const feed = hits && hits.map ( (hit, index) => {
            const className = (index % 2) ? "dark-gray-background-mobile": "gray-background-mobile"
            return (
                <div key={hit.objectID} className={className} >
                    {index+1}. <UpVoteButton onClick={()=> this.handleUpVote(index)}/> 
                    <div className="div-inline-table">
                        <span className="title-text">{hit.title}</span> 
                        <br/><PostURL {...hit} /><span className="gray-text"> by </span><Author {...hit}/>
                        <br/><TimeElapsed {...hit} /><HidePost onHide={this.handleHide}/>
                        <br/>Comments: {hit.num_comments} Points: {hit.points}
                    </div>
                </div>)
        })
        return feed;
    }

    render(){
        const { hits } = this.props;
        return (
            <div>
                <Header />
                <div className="feed-container is-hidden-mobile">
                    { this.layoutFeeds(hits) }
                </div>
                <div className="feed-container is-hidden-tablet">
                    { this.layoutMobileFeed(hits) }
                </div>
                
            </div>
        )
    }
}

Feeds.propTypes = {
    hits : PropTypes.array
}

const mapDispatchToProps = (dispatch) => {
    return {
        upVoteFeed: (idx) => {
            dispatch(actions.upVoteFeed(idx));
        }
    };
};

export default connect(null, mapDispatchToProps)(Feeds);