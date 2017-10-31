
//Ross calls this a document-ready YO, confirms page is loading properly
// $(function() {
//     alert("yo");
// });

$(function() {
	
	let tableNumber = $("div.circle").text(); 
	// this returns 123456789

	$("div.circle.available").on("click", function(){
		$(".formContainer").css('display', 'flex');
	});


});
// end of wrapping function!!