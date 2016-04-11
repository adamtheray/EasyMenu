Ingredients = new Mongo.Collection('ingredients');
Meteor.methods({
  ingredientSubmit:function(ingredientData){
     check(Meteor.userId(),String);
     check(ingredientData,{
       name:String,
       measurement:String
     });
     var sameIngredient = Ingredients.findOne({name:ingredientData.name});
     if(sameIngredient){
       return {
         ingredientExists: true,
         _id:sameIngredient._id
       }
     }
     var ingredientId = Ingredients.insert(ingredientData)
     return {
       _id:ingredientId
     };
  }
});
