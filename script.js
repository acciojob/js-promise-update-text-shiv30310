//your JS code here. If required.

const output = document.getElementById("output")

function resPromise(){
	return new Promise(resolve, reject){
		setTimeout(() => {
			output.innerText = "Hello, world!"
		}, 1000)
	}
}
resPromise()