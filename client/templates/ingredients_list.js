Meteor.subscribe("ingredients");
Template.IngredientsList.helpers({
  ingredients:function(){
    return Ingredients.find();
  }
});
