/*1.vCreate an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

var favoriteCoffe = {
    coffeName: "Nes",
    strength: "mild",
    flavour: "standard",
    milk: "yes",
    sugar: "yes",
}
console.log(favoriteCoffe)

// v.2

function FavoriteCoffe(name, str, flav, mil, sug) {
    this.coffeName = name;
    this.strength = str;
    this.flavour = flav;
    this.milk = mil;
    this.sugar = sug;
    this.bezMleka = function() {
        return this.milk = false;
    }
}

var kafa = new FavoriteCoffe("Nes", "mild", "standard", true, true);
console.log(kafa);
console.log(kafa.bezMleka())

/*Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

var favoriteMovie = {
    movieTitle: "MyFavoriteMovie",
    actors: {
        actor1: "Actor1",
        actor2: "Actor2"
    },
    director: "Ju Hyua"

}
console.log(favoriteMovie)

// v.2.

function FavMovie(title, actors, director) {
    this.movieTitle = title;
    this.movieActors = actors;
    this.movieDirector = director;
}

var film = new FavMovie("MyFavMovie", { actor1: "Pera", actor2: "Mica" }, "Mita");
console.log(film)

/*Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/

function createProject(deskr, lang, github, dev) {
    var project = {
        description: deskr,
        programmingLanguage: lang,
        git: github,
        inDevelopment: dev,
        printOut: function() {
            console.log(this.git);
        },
        check: function() {
            return this.inDevelopment;
        },
        checkLanguage: function() {
            if (this.programmingLanguage === "JS") {
                return true;
            } else {
                return false;
            }
        }
    }
    return project;
}


var program = createProject("programm", "JS", "abcd", true);

console.log(program)
program.printOut()
console.log(program.check())
console.log(program.checkLanguage())

// v.3 constructor

function CreateProject(deskr, lang, github, dev) {
    this.description = deskr;
    this.programmingLanguage = lang;
    this.git = github;
    this.inDevelopment = dev;
    this.printOut = function() {
        console.log(this.git);
    };
    this.check = function() {
        return this.inDevelopment;
    };
    this.checkLanguage = function() {
        if (this.programmingLanguage === "JS") {
            return true;
        } else {
            return false;
        }
    }
}

var project = new CreateProject("programm", "JS", "xsgd.github.com", true);
console.log(project);
project.printOut();
console.log(project.check());
console.log(project.checkLanguage())

/*Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function createRecipe(name, cuisine, complex, ingredients, time, instruction, newCuisine) {
    var recipe = {
        recipeName: name,
        cuisineType: cuisine,
        complexity: complex,
        listOfIngredients: ingredients,
        preparingTime: time,
        preparingInstruction: instruction,
        printIngredinets: function() {
            console.log(this.listOfIngredients);
        },
        isItDoneIn15min: function() {
            return this.preparingTime === "15min";
        },
        replaceCuisine: function() {
            return recipe.cuisineType = newCuisine;
        },
        deleteIngredient: function(list, ing) {
            var updatedList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i] !== ing) {
                    updatedList[updatedList.length] = list[i];
                }
            }
            return updatedList;
        }
    }
    return recipe;
}

var recipe = createRecipe("pancakes", "french", 2, ["water", "flour", "sugar", "eggs", "milk"], "25min", "mix and bake", "german");
console.log(recipe);
recipe.printIngredinets();
console.log(recipe.isItDoneIn15min());
console.log(recipe.replaceCuisine());
console.log(recipe.deleteIngredient(recipe.listOfIngredients, "milk"));

// v.3.Final

function Recipe(name, cuisine, complex, ingredients, time, instruction, newCuisine) {
    this.recipeName = name;
    this.cuisineType = cuisine;
    this.complexity = complex;
    this.listOfIngredients = ingredients;
    this.preparingTime = time;
    this.preparingInstruction = instruction;
    this.prepForN = function(arr, n) {
        var newArray = [];
        var res = [];
        var newEl = "";
        newArray = arr.map(function(ing) {
            return ing.split(' ');
        });
        newArray.forEach(function(el) {
            el.splice(0, 2, el[0] * n, el[1] + "s");
            return newArray;
        });
        for (var i = 0; i < newArray.length; i++) {
            newEl = newArray[i].join(' ');
            res[res.length] = newEl;
        }

        return res;
    };
    this.printIngredinets = function() {
        console.log(this.listOfIngredients);
    };
    this.isItDoneIn15min = function(time) {
        return this.preparingTime === "15min";
    };
    this.replaceCuisine = function() {
        return this.cuisineType = newCuisine;
    };
    this.deleteIngredient = function(list, ing) {
        var updatedList = [];
        updatedList = list.filter(function(elem) {
            return elem !== ing;
        });

        return updatedList;
    }
}

var pizza = new Recipe("pizza",
    "italian",
    3, ["1 cup of water", "1 cup of flour", "1 cup of ketchup", "1 cup of sugar", "1 cup of cheese", "1 cup of mushrooms"],
    "30min", "mix and bake",
    "mexican");

console.log(pizza);
pizza.printIngredinets();
console.log(pizza.isItDoneIn15min());
console.log(pizza.replaceCuisine());
console.log(pizza.deleteIngredient(pizza.listOfIngredients, "1 cup of sugar"));
console.log(pizza.prepForN(pizza.listOfIngredients, 4));

console.log("..........................................................");

// v.4 with obj as ingredients

function Recipe(name, cuisine, complex, ingredients, time, instruction, newCuisine) {
    this.recipeName = name;
    this.cuisineType = cuisine;
    this.complexity = complex;
    this.listOfIngredients = ingredients;
    this.preparingTime = time;
    this.preparingInstruction = instruction;
    this.prepForN = function(arr, n) {
        var newValues = [];
        newValues = arr.map(function(obj) {
            var newObj = {};
            var newValue = 0;
            newValue = obj.kol * n;
            newObj.kol = newValue;
            newObj.m = obj.m;
            newObj.ingName = obj.ingName;
            return newObj;
        });
        return newValues;
    };
    this.printIngredinets = function() {
        console.log(this.listOfIngredients);
    };
    this.isItDoneIn15min = function(time) {
        return this.preparingTime === "15min";
    };
    this.replaceCuisine = function() {
        return this.cuisineType = newCuisine;
    };
    this.deleteIngredient = function(list, ing) {
        var updatedList = [];
        updatedList = list.filter(function(elem) {
            return elem.ingName !== ing;
        });
        return updatedList;
    }
}

var pizza = new Recipe("pizza",
    "italian",
    3, [{ kol: 100, m: "g", ingName: "flour" },
        { kol: 200, m: "ml", ingName: "milk" },
        { kol: 150, m: "g", ingName: "cheese" },
        { kol: 200, m: "ml", ingName: "ketchup" }
    ],
    "30min",
    "mix and bake",
    "mexican"
);

console.log(pizza);
pizza.printIngredinets();
console.log(pizza.isItDoneIn15min());
console.log(pizza.replaceCuisine());
console.log(pizza.deleteIngredient(pizza.listOfIngredients, "milk"));
console.log(pizza.prepForN(pizza.listOfIngredients, 4));