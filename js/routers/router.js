var UndergroundWineRouter = Backbone.Router.extend({
	routes: {
    "aroute": "somefunction",
  },
  somefunction: function() {

  	var user1 = new User({first: "Joe", last: "Smith", email: "joesmith@gmail.com"})
  
	var user1View = new UserView({ model: user1 });	
	
	console.log(user1View)

	user1View.render();

	console.log(user1View)

	$("#user").append(user1View.el);

  }
})