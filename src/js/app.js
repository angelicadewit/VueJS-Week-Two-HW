var app = new Vue({
	el: "#app",
	data: {
		newName:``,
		newEmail:``,
		people: [],
	},
	created: function() {
		setInterval(this.calculateElapsedTimes, 1000)
	},
	methods:{
		addPerson: function(){
			let newPerson =  {
				image: `https://www.gravatar.com/avatar/` + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime(),
				elapsedtime: "",
				checkin: moment(this.timestamp).format("MMM Do hh:mm:ss a"),
			}

			this.people.push(newPerson)
			this.newName = ``
			this.newEmail = ``

			if (this.people.length > 2){
				this.people.splice(this.index, 1)
			}
			this.setFocus()
		},

		setFocus: function(){
			this.$refs.name.focus();
		},

		calculateElapsedTimes: function(){

			this.people.forEach(function(person) {
				let currentTime = moment(new Date().getTime())
				let timeCheckedIn = moment(person.timestamp)
				person.elapsedtime = `checked in ` + timeCheckedIn.from(currentTime)
			})
		}
	}
})
