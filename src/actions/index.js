export function getComponents() {
    console.log("getComponents")
    return dispatch => {
        return fetch(`./src/data.json`)
            .then(response => response.json())
            .then((json) => {
                console.log("json", json);
                return dispatch({type: 'LOAD', payload: json});
            })
            .catch(err => {
                console.log("erro")
                //return dispatch(failedToGetMovies(json, sortBy));
                throw err;
            });
    }
    return null;
}