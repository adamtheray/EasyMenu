Meteor.publish("ingredients", function(){
  return Ingredients.find();
});
