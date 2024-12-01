function cardInfo(wantedCard) {

   let cardData = [
      {
         position: "2",
         title: "Germany",
         description: "Cars, Beer, Burgers",
         link: "",
         image: "",
      },
      {
         position: "4",
         title: "France",
         description: "Kiss, Wine, Crossiant",
         link: "",
         image: "",
      },
      {
         position: "3",
         title: "Russia",
         description: "Missile, Vodka, Olivyer",
         link: "",
         image: "",
      },
      {
         position: "1",
         title: "Spain",
         description: "Matador, Sangria, Churros",
         link: "",
         image: "",
      }
   ]
   for (let card of cardData) {
      if (wantedCard === card.title) {
         return card;
      }
   }
   return null;
}

function getData(data) {
   cache = [];
} 
