//Create form w/ text box
// create submit box w/ submit event listener
// add submitted value to html

const blogPage = document.getElementById("blogForm");

	blogPage.addEventListener("submit", function(event) {
		event.preventDefault();
		let newPost = document.getElementById("inputBox").value;
		console.log(newPost);
	})

