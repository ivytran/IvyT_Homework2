document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("add_meal").addEventListener("click", function () {
        var meal = new Meal(
            document.getElementById("food").value,
            document.getElementById("calories").value,
            document.getElementById("quantity").value
            );
        if (!meal.Valid()) {
            alert("All fields must be completed"+ "Calories and quantities must be numeric and greater than zero");
        } else {
            meals.push(meal); 
            displaymeals();
        }
    });

    document.getElementById("food").focus();
});

let meals = [];

var displaymeals= function(){
    var displayString = "", totalCal= 0;
    for (var i in meals){
        displayString += meals[i].toString()+"\n";
        totalCal += meals[i].calculateCalories();
    } 
    let cumulativeCalories = totalCal+meals.length;

    displayString += "\nCumulative Calories Consumed"+ cumulativeCalories.toFixed(1);
    document.getElementById("meal_list").value = displayString;
    document.getElementById("calories").select();  
}