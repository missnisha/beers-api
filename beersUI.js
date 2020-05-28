
class BeersUI {
    constructor() {
        this.beerLogic = new BeersLogic()
    }

    detail(){
        const beerid = this.beerLogic.getId();
        this.renderById();
        console.log(beerid)
    }

    init() {
        this.renderBeers();
        this.renderButtons();
        this.RandomBeers();
        
        
    }

    renderButtons() {
     $("#buttons").append(`
       <button id="previous">Previous page</button> 
     <button id="next">Next page</button>
        
    
     `);
     $("#next").click(() => {
         const currentPage = this.beerLogic.currentPage;

         this.beerLogic.setCurrentPage(currentPage + 1);
        
         this.renderBeers()


      });

      

        $("#previous").click(() => {
            const currentPage = this.beerLogic.currentPage;

            this.beerLogic.setCurrentPage(currentPage - 1);

            this.renderBeers()


        });
    }

    RandomBeers() {

        this.beerLogic.getRandomBeers()
            .then(jsonResponse => {
                console.log(jsonResponse)
                jsonResponse.forEach(beer => {
                    $("#randomBeers").append(`
                         <div class="your-class">
                            <div class="slide" >
                                <img src="${beer.image_url}" />
                            </div>
                        
                        </div>  
                        
                    `);
                    
                })
                $('#randomBeers').slick({
                    autoplay: true,
                    dots: true,
                });
            })

    }

    
    renderBeers() {
        this.beerLogic.getBeers()
            .then( jsonResponse => {
                $("#beers").empty();
                jsonResponse.forEach(beer => {
                    $("#beers").append(`
                        <div class="beer-item">
                            <div class="beer-item-image" style="background-image: url('${beer.image_url}')"></div>
                            <div class="beer-item-content">
                                <h2>${beer.name}</h2>
                                    <p>${beer.tagline}</p>
                                <hr />
                                <p>${beer.description}</p>
                                <p>${beer.first_brewed}</p>
                                <a href="detail.html?id=${beer.id}">view more</a>
                            <div/>
                        <div/>
                    `);
                })
            
            })

    }//funcion dentro clase con acceso al this =METODO
 
    renderById() {
        this.beerLogic.getBeerById()
            .then(jsonResponse => {
                $('#beers').empty();
                jsonResponse.forEach(beer => {
                    console.log("beers", beers)
                    $('#beers').append(`
                        <div class="beer-item">
                        <div class="beer-image" style="background-image: url('${beer.image_url}'"></div>
                        <div class="beer-item-content">
                            <h2>${beer.name}</h2>
                            <p>${beer.tagline}</p>
                            <hr />
                            <p>${beer.description}</p>
                            <p>Brewed: ${beer.first_brewed}</p>
                        </div>
                        </div>
                   `);
                });
        
            })
    }
    /* 
  */
}

