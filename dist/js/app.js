"use strict";

var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		people: []
	},
	created: function created() {
		setInterval(this.calculateElapsedTimes, 1000);
	},
	methods: {
		addPerson: function addPerson() {
			var newPerson = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime(),
				elapsedtime: "",
				checkin: moment(this.timestamp).format("MMM Do hh:mm:ss a")
			};

			this.people.push(newPerson);
			this.newName = "";
			this.newEmail = "";

			if (this.people.length > 2) {
				this.people.splice(this.index, 1);
			}
			this.setFocus();
		},

		setFocus: function setFocus() {
			this.$refs.name.focus();
		},

		calculateElapsedTimes: function calculateElapsedTimes() {

			this.people.forEach(function (person) {
				var currentTime = moment(new Date().getTime());
				var timeCheckedIn = moment(person.timestamp);
				person.elapsedtime = "checked in " + timeCheckedIn.from(currentTime);
			});
		}
	}
});
//# sourceMappingURL=app.js.map
