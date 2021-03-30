 //loops,array,& object
///task 1 for loops 
for (var i = 1; i <= 12; i++) {
  var result = i * 7;
  console.log(`${result} is 7 * ${i}`);
}
// task 2 Arrays
let myFavouriteFood = [
    'Noodles',
    'Chicken',
    'apples',
    'pizza'
]
 //task3
for (i=0; i < myFavouriteFood.length; i ++){
    console.log(myFavouriteFood[i]);

}

//task4 object
var myRecipe = {
    recipeTitle: 'Jollof rice',
    servings: 2,
    ingredients: [
        'chicken',
        'onion',
        'rice',
        'tomato',
        'salt'
    ],
    directions: [
        'frie the chicken', 'mixed the tomato with onion', 'put it in the pan let it boil',
        'add rice in the pan'
    ],
     letsCook: function() {
        document.write(`I am hungry! Let's cook ${this.recipeTitle}`)
    }
}

document.write(myRecipe.recipeTitle + '<br>');
document.write(myRecipe.servings + '<br>');
document.write(`ingredients: ${myRecipe.ingredients}  <br>`);

for(i =0; i < myRecipe.ingredients.length; i++){
    document.write(`-${myRecipe.ingredients[i]}  <br>`);
}
for(i =0; i < myRecipe.directions.length; i++){
    document.write(`${i + 1}.${myRecipe.directions[i]}  <br>`);
}

//task 5
 

myRecipe.letsCook();
















