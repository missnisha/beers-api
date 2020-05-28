//aPi service
function fetchBeers(page, perPage = 12) {
    return new Promise((resolve, reject) =>{
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse))
        .catch(err => reject(err))
})
}


//END API SERVICE



function fetchRandomBeers() {
    return new Promise((resolve, reject) =>{
    fetch(`https://api.punkapi.com/v2/beers/random`)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse[0]))
        .catch(err => reject(err))
})
}

function singleBeerId(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then(response => response.json())
            .then(jsonResponse => resolve(jsonResponse))
            .catch(err => reject(err))
    })
}

