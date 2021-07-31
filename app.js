
    // Create Dino Constructor
    function Animal(species, weight, height, diet, where, when, fact){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.toFeet = function(){
            let feet = Math.floor(this.height/12);
            let inches = this.height % 12;
            return ;
        }
    }

    // Create Dino Objects
    Animal.prototype = dinos;
    const dinos = new Animal(){

    }


    // Create Human Object
    Animal.prototype = human
    const human = {
        name: 'Human'
    }


    // Use IIFE to get human data from form
    function getHuman(){
        return (function(){
            let name = document.getElementById("name");
            let heightFeet = hf;
            let heightInch = hi;
            let weight = w;
            let diet = d;
            return new human()
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
