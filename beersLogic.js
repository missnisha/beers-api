class BeersLogic {
    constructor() {
        this.currentPage = 1;

    }

    getBeers() {
        return new Promise((resolve, reject) => {
            fetchBeers(this.currentPage)
                .then(beers => {
                    resolve(beers)
                })
                .catch(error => {
                    resolve([]);
                })
        })
    }

    setCurrentPage(page) {
        this.currentPage = page;

    }

    getId() {
        const params = new URLSearchParams(location.search)
        return params.get('id')
    }

    getBeerById() {
        return new Promise((resolve, reject) => {
            console.log(this.getId());
            
            singleBeerId(this.getId())
                .then(beers => {
                    resolve(beers)
                })
                .catch(error => {
                    console.log(error);
                    
                    resolve([]);
                })
        })

    }

   async getRandomBeers() {
        const b1 = await fetchRandomBeers()
        const b2 = await fetchRandomBeers()
        const b3 = await fetchRandomBeers()
        return [b1, b2, b3];
        console.log(getRandomBeers);
    }
 
}

