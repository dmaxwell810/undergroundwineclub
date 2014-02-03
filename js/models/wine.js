var User = Backbone.Model.extend({
	defaults: {
		first: "None given",
		last: "None given",
		email: "None given"
	}
})

var user = new User(
	{ first: "", last: "", email: "" }
	);