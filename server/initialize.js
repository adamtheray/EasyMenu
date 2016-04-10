if(Ingredients.find().count()===0){
  console.log("Ingredients table empty, adding basic ingredients");
  Ingredients.insert({
    name: 'Chicken: Breasts',
    measurement: 'pounds'
  });
  Ingredients.insert({
    name: 'Chicken: Tenders',
    measurement: 'pounds'
  });
};
