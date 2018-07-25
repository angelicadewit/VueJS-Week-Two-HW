var app = new Vue({
	el: "#app",
	data: {
		newName:``,
		newEmail:``,
		people: [],
	},
	methods:{
		addPerson: function(){
			let newPerson =  {
				image: `https://www.gravatar.com/avatar/` + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime(),
				checkin: moment(this.timestamp).format("MMM Do hh:mm:ss a"),
				lapsedtime: this.sinceTime()

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
		sinceTime: function(){
			this.interval = setInterval(() => {
				let timestamp = this.timestamp
				console.log(`hello`)
			}, 1000)
		}
	}
})
