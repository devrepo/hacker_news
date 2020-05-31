import lscache from "lscache";

//Simple sliced reducer to get the feeds
export const getFeed = (state, action) => {
    const { hits } = action.payload;

    /**
     * Retrieve hits from Local storage, if it is done with an API,
     * this code can be removed.
     */

    const newHits = hits.map(hit => {
        const { objectID } = hit;
        const retrievedHit = lscache.get(objectID);
        if (retrievedHit){
            hit.points = hit.points < retrievedHit.points ? retrievedHit.points : hit.points;
        }
        return hit;
    })

    return {
        loading: false,
        ...action.payload,
        ...newHits,
        error: null
    };
};

export const upVoteFeed = (state, action) => {
    let hits = state.hits;
    const index = action.payload;
    let hit = hits[index];
    let newHit = Object.assign({}, hits[index], {points: hit.points+1});
    
    lscache.set(hit.objectID, newHit);
    let updatedHits = [ ...hits.slice(0, index), newHit,...hits.slice(index + 1)]
    
    return {
        ...state,
        loading: false,
        hits: updatedHits,
        error: null
    };
}

/*


const { id, parentId, text } = data;
        let array = state[parentId].listItems;
        let array2 =[...array.slice(0, id), Object.assign({}, array[id], {text: text}),...array.slice(id + 1)]
        let returnState =  [...state.slice(0, parentId), Object.assign({}, state[parentId], { listItems: array2}), ...state.slice(parentId+1)];
        return returnState;

*/