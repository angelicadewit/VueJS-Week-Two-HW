"use strict";

var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		people: [],
		updateTime: ""
	},
	computed: {
		momentTime: function momentTime() {
			var zone = moment().utcOffset();
			var time = moment.utc(this.timestamp).utcOffset(zone);
			var updateTime = setInterval(this.time, 1000);
			var formattedTime = time.format("MMM Do h:mm:ss a") + "," + updateTime;
			return formattedTime;
		}
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
