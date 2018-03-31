//Create form w/ text box
// create submit box w/ submit event listener
// add submitted value to html


$(document).ready(function(event) {


$('#blogForm').submit(function(event) {
	event.preventDefault();

$('#awesomePost').append("<li>" + ($('#inputBox').val()))

})
})

// const blogPage = document.getElementById("blogForm");

	// blogPage.addEventListener("submit", function(event) {
	// 	event.preventDefault();
		// this allowed the button to be used
// 		let newPost = document.getElementById("inputBox").value;
// 		// this allowed the values inputed in the box to be recognized
// 		// console.log(newPost);
// // now lets add the inputed value into the HTML page so the user can see
// 	let savedPost = document.getElementById('awesomePost') 
// 	savedPost.innerHTML += newPost

// 	let bulletPoint = document.createElement("li");
// 	savedPost.appendChild(bulletPoint);
	// console.log(bulletPoint);
	// newPost

//text are showing in line - need to show as vertical when new post added (appendChild?????)