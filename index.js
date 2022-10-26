let hobbies = []
let check = false
function validate(submit = false){
    let name = document.getElementById('fullName').value
    let gender = document.getElementById('gender').value
	let error = false
	
    if(name.length >= 5) {
		document.getElementById('valid-Name').style.display = 'block'
		document.getElementById('invalid-Name').style.display = 'none'
	} else {
		error = true
		document.getElementById('invalid-Name').style.display = 'block'
		document.getElementById('valid-Name').style.display = 'none'
		
	}

    if(gender != 'N') {
		document.getElementById('valid-gender').style.display = 'block'
		document.getElementById('invalid-gender').style.display = 'none'
	} else {
		error = true
		document.getElementById('invalid-gender').style.display = 'block'
		document.getElementById('valid-gender').style.display = 'none'
		
	}
	// ===============================================
	check = document.getElementById('swimming').checked
	if(check){
		hobbies.push(document.getElementById('swimming').value)
		check = false 
	}
	check = document.getElementById('Reading').checked
	if(check){
		hobbies.push(document.getElementById('Reading').value)
		check = false  
	}
	check = document.getElementById('Dancing').checked
	if(check){
		hobbies.push(document.getElementById('Dancing').value)
		check = false 
	}
	check = document.getElementById('Singing').checked
	if(check){
		hobbies.push(document.getElementById('Singing').value)
		check = false  
	}
	if(hobbies.checked){
		document.getElementById('invalid-hobbie').style.display = 'block'
	}
	if(!error && submit) {
		if(hobbies.length == 1){
			document.getElementById('valid-hobbie').style.display = 'block'
		alert(`hobbies of ${name} (${gender}) is ${hobbies}`)
		}else{
			document.getElementById('valid-hobbie').style.display = 'block'
		alert(`hobbies of ${name} (${gender}) are ${hobbies.slice(0,hobbies.length-1)} and ${hobbies[hobbies.length-1]}`)
		}
		refresh()
	  }
	  
}
function refresh(){
	document.getElementById('form').reset()
	
}
	