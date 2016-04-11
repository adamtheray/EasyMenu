Template.ingredientSubmit.events({
  'submit form': function(e){
    e.preventDefault();
    var ingredientData = {
      name: $(e.target).find([name=ingredientName]).val(),
      measurement: $(e.target).find([name=measurement]).val()
    };
    Meteor.call('ingredientSubmit',ingredientData,function(error,result){
      if (error)
        return alert (error.reason);
      if(result.ingredientExists)
        return alert ("Ingredient Exists!");
      Router.go('ingredientsList');
    })
  }
})
