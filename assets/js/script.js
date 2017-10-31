
//Ross calls this a document-ready YO, confirms page is loading properly
// $(function() {
//     alert("yo");
// });

/* Brandon's Code */
/*
$('.circle.available').on('click', function makeReservation() {

	//let selectedTable = $(this).text();

	$('.formContainer').css('display', 'flex');

	//return tableNo on reservation form
	$('.tableNo').text("Table Number: " + $(this).text());

	$('button').on('click', function(){
		debugger;
		$(this).removeClass('available');	
		$(this).addClass('reserved');	
		$('.formContainer').css('display', 'none');
	});

	$('.closeForm').on('click', function(){
		// $(this).addClass('available');	
		// $(this).removeClass('reserved');
		$(".formContainer").css('display', 'none');
	});

}); */


//$(function() {

	$('.circle.available').on('click', function(){
		//return tableNo on reservation form
		$('.tableNo').text("Table Number: " + $(this).text());
		$(this).addClass('selected');
		$('.formContainer').css('display', 'flex');
	});

	$('button').on('click', function(){
		//debugger;

		$('.selected').addClass('reserved');
		let testing = $('.selected').text();
		console.log(testing);
		//$('.selected').removeClass('available');
		
		//$('.formContainer').css('display', 'none');
	});

	// $('.closeForm').on('click', function(){
	// 	$('.selected').removeClass('selected');
	// 	$(".formContainer").css('display', 'none');
	// });




// after lunch
// √) remove the input for table number and append the Table Num to the text
// √) get the damn modal to close
// _) make submit reserve a table 

//});
// end of wrapping function!!
