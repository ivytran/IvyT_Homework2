let Meal = function (food, calories, quantity){
    this.food= food;
    this.calories = parseFloat(calories);
    this.quantity= parseFloat(quantity);

    this.calculateCalories = function (){
        return this.calories + this.quantity;
    };
};


Meal.prototype.Valid= function(){
    if(this.food == "" || isNaN(this.calories)||isNaN(this.quantity)){
        return false;
    }
    else if (this.calories <=0 || this.quantity <=0){
        return false;
    }
    else{
        return true;
    }
}

Meal.prototype.toString = function (){
    let cal = this.calculateCalories().toFixed(1);
    return this.food + " Calories "+ this.calories+ " Quanity "+ this.quantity;
}