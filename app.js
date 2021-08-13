
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
    function Dino(species, weight, height, diet, where, when, fact){
        Animal.apply(this, [species, weight, height, diet, where, when]);
        this.fact = fact;
    }
    Dino.prototype = Object.create(Animal.prototype);
    Dino.prototype.constructor = Dino;

    // retrieve dinos from local json
    fetch('dino.json')
        .then(response => response.json())
        .then(jsonData => {
            fetchedDinosArray(jsonData.Dinos)
        });

    // array for fetched Dinos
    function fetchedDinosArray(dinoArray){
        let fetchedDinos = [];
        dinoArray.forEach(element => {
            newDino = new Dino(
                element.species,
                element.weight,
                element.height,
                element.diet,
                element.where,
                element.when,
                element.fact
            )
            fetchedDinos.push(newDino);
        });
        return fetchedDinos;
    }

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


    // Compare Method: Height
    function compareHeight(dinoHeight, humanHeight){
        if(dinoHeight > humanHeight){
            let excessHeight = dinoHeight - humanHeight;
            return "This dinosaur is " + excessHeight + " inches taller than you!";
        }else{
            let underHeight = humanHeight - dinoHeight;
            return "This dinosaur is " + underHeight + " inches shorter than you!";
        }
    }

    
    // Compare Method: Weight
    function compareWeight(dinoWeight, humanWeight){
        if(dinoWeight > humanWeight){
            let excessWeight = dinoWeight - humanWeight;
            return "This dinosaur weighs " + excessWeight + " pounds more than you!";
        }else{
            let underWeight = humanWeight - dinoWeight;
            return "This dinosaur weighs " + underWeight + " pounds less than you!";
        }
    }

    
    // Compare Method: Diet
    function compareDiet(dinoDiet, humanDiet){
        switch(dinoDiet.toLowerCase()){
            case humanDiet.toLowerCase():
                return "You and this dinosaur have the same diet: ${dinoDiet}";
            case "omnivore":
                return "You and this dinosaur have different diets. This dinosaur is an ${dinoDiet}";
            case "carnivore":
                return "You and this dinosaur have different diets. This dinosaur is a ${dinoDiet}";
            case "herbavor":
                return "You and this dinosaur have different diets. This dinosaur is an ${dinoDiet}";
        }
    }
    
    // create Location fact
    function getDinoLocation(dinoLoc){
        return "This dinosaur could be found in " + dinoLoc;
    }

    // create Period fact
    function getDinoPeriod(dinoPeriod){
        return "This dinosaur could be found in the " + dinoPeriod + " period.";
    }

    // get random fact
    function getRandomFact(dino, human){
        let dinoFacts = [];
        dinoFacts.push(dino.fact);
        dinoFacts.push(getDinoPeriod(dino.when));
        dinoFacts.push(getDinoLocation(dino.where));
        dinoFacts.push(compareHeight(dino.height, human.height));
        dinoFacts.push(compareWeight(dino.weight, human.weight));
        dinoFacts.push(compareDiet(dino.diet, human.diet));

        return dinoFacts[Math.floor(Math.random() * dinoFacts.length)];
    }
    // Generate Tiles for each Dino in Array
    function generateTiles(dinosuars, human){
        dinosuars.splice(4,0,null)
        for(let i=0; i,9; i++){
            let tileDiv = document.createElement('div')
            tileDiv.className = 'grid-item'

            if(i===4){
                let tile = document.createElement("h2")
                tile.innerHTML = `<h2>${human.name}</h2>
                <img src="images/human.png" alt = "picture of ${human.name}"/>`
                tileDiv.appendChild(tile)
            }else if (dinosuars[i].species == 'Pigeon'){
                let tile = document.createElement("h2")
                tile.innerHTML = `<h2>${dinosuars[i].species}</h2>
                <img src="images/${dinosuars[i].species.toLowerCase()}.png" alt = "picture of ${dinosuars[i].species}"/>
                <h4>${dinosuars[i].fact}</h4>`
                tileDiv.appendChild(tile)
            }else{
                let randomFact = getRandomFact(dinosuars[i], human)
                let tile = document.createElement("h2")
                tile.innerHTML = `<h2>${dinosuars[i].species}</h2>
                <img src="images/${dinosuars[i].species.toLowerCase()}.png" alt = "picture of ${dinosuars[i].species}"/>
                <h4>${randomFact}</h4>`
                tileDiv.appendChild(tile)
            }
            document.getElementById("grid").appendChild(tileDiv)
        }
    }

    // Remove form from screen
    function hideForm(){
        document.getElementById("dino-compare").style.display = "none";
    }


// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", () =>{
    // hide human form view
    hideForm();
    console.log(fetchedDinos)
    // generateTiles(fetchedDinos, getHuman());
});
