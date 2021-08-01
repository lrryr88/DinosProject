
    // Create Dino Constructor
    function Animal(species, weight, height, diet, where, when){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
    }

    // Create Dino Objects
    function Dino(fact, image){
        this.fact = fact;
        this.image = image;
        this.toFeet = function(){
            let feet = Math.floor(this.height/12);
            let inches = this.height % 12;
            return ;
        }
    }
    Dino.prototype = Object.create(Animal.prototype);
    Dino.prototype.constructor = Dino;

    // retrieve dinos from local json
    // fetch("/Users/larryrogersjr/ColorCodedLabs/Dinos/dino.json")
    // .then(response => response.json())
    // .then(jsonData => console.log(jsonData));

    // Create Human Object
    function Human(name, weight, height, diet){
        Animal.apply(this, ["Human", weight, height, diet]);
        this.name = name;
    }
    Human.prototype = Object.create(Animal.prototype);
    Human.prototype.constructor = Human;


    // Use IIFE to get human data from form
    function getHuman(){
        return (function(){
            let name = document.getElementById("name").value;
            let heightFeet = document.getElementById("feet").value;
            let heightInch = document.getElementById("inches").value;
            let weight = document.getElementById("weight").value;
            
            let dietDrpDwn = document.getElementById("diet");
            let diet = dietDrpDwn.options[dietDrpDwn.selectedIndex].text;
            return new Human(name, weight, heightFeet*12 + Number(heightInch), diet)
        })();
    }


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) =>{
    e.preventDefault();
    getHuman()
    document.getElementById("dino-compare").style.display = "none";
});
