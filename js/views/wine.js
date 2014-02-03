var UserView = Backbone.View.extend({
	events: {
		"click .destroyer": function(){
			console.log('You have deleted this user.');
			console.log(this.model)
			this.remove()
		}
	},
	render: function(){
    $(this.el).html("<li>" + this.model.get("name") + "<button type=\"button\" class=\"destroyer\"> Destroy </button> </li>"); 
  }
});