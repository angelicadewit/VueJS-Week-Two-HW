var app = new Vue({
	el: "#app",
	data: {
		newName:``,
		newEmail:``,
		people: [],
	},
	computed: {
		momentTime() {
		  return moment(this.timeStamp).format(`MMMM Do h:mm:ss a`)
	  }
	},
	methods:{
		addPerson: function(){
			let newPerson =  {
				image: `https://www.gravatar.com/avatar/` + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime(),
			}
			this.people.push(newPerson)
			this.newName = ``
			this.newEmail = ``
			if (this.people.length > 2){
				this.people.splice(this.index, 1)
			}
		}
	}
})
