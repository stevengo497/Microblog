//Create form w/ text box
// create submit box w/ submit event listener
// add submitted value to html

const blogPage = document.getElementById("blogForm");

	blogPage.addEventListener("submit", function(event) {
		event.preventDefault();
		// this allowed the button to be used
		let newPost = document.getElementById("inputBox").value;
		// this allowed the values inputed in the box to be recognized
		console.log(newPost);
// now lets add the inputed value into the HTML page so the user can see
	let savedPost = document.getElementById('awesomePost') 
	awesomePost.innerHTML += newPost

	})

// now lets add the inputed value into the HTML page so the user can see


