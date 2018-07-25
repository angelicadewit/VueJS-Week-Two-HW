var app = new Vue({
	el: "#app",
	data: {
		newName:``,
		newEmail:``,
		people: [],
		updateTime: ``,
	},
	// computed: {
	// 	momentTime: function (){           
	// 		let zone = moment().utcOffset()
	// 		let time = moment.utc(this.timestamp).utcOffset(zone)
	// 		let updateTime = setInterval(this.time, 1000)
	// 		let formattedTime = time.format(`MMM Do h:mm:ss a`) + `,` + updateTime
	// 		return formattedTime;
	// 	}
	// },
	methods:{
		addPerson: function(){
			let newPerson =  {
				image: `https://www.gravatar.com/avatar/` + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				// timestamp: new Date().getTime()
				timestamp: this.captureTime()
			}
			this.people.push(newPerson)
			this.newName = ``
			this.newEmail = ``
			if (this.people.length > 2){
				this.people.splice(this.index, 1)
			}
		},
		captureTime: function(){
			let unixTimeStamp = new Date().getTime()
			let checkedTime = moment(this.unixTimeStamp).format("MMM Do hh:mm:ss a")
			return checkedTime
		}
	}
})
