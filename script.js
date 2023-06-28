const output = document.getElementById("output")

function resPromise(){
	return new Promise(resolve => {
		setTimeout(() => {
			output.innerText = "Hello World!"
		}, 1000)
	})
					   
}

resPromise()