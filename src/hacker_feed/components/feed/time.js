import React from 'react';

const timeElapsed = (date) => {
    const current = new Date();
    const previous = new Date(date);
    let difference = current - previous;

    const daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    const hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    const minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    const secondsDifference = Math.floor(difference/1000);

    if (daysDifference > 1){
        return daysDifference + " days ago";
    } else if (hoursDifference > 1){
        return hoursDifference + " hours ago";
    }else if (minutesDifference > 1){
        return minutesDifference + " minutes ago";
    }else {
        return secondsDifference + " seconds ago";
    }
}

const TimeElapsed = (props) => {
    return (
        <span className="gray-text"> {timeElapsed(props.created_at)} </span>
    )
}

export default TimeElapsed;