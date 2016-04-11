Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {return Meteor.subscribe('ingredients')},
  loadingTemplate:'loading'
});

Router.route('/',{name:'ingredientsList'});

Router.route('/ingredientSubmit', {name:'ingredientSubmit'});

var requireLogin=function(){
  if(!Meteor.user()){
    if(Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
Router.onBeforeAction(requireLogin,{only:'ingredientSubmit'});
