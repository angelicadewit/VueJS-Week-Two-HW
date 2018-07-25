"use strict";

var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		people: []
	},
	methods: {
		addPerson: function addPerson() {
			var newPerson = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime()
			};
			this.people.push(newPerson);
			this.newName = "";
			this.newEmail = "";
			if (this.people.length > 2) {
				this.people.splice(this.index, 1);
			}
		}
	}
});
//# sourceMappingURL=app.js.map
