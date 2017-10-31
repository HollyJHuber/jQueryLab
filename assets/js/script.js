
//Ross calls this a document-ready YO, confirms page is loading properly
// $(function() {
//     alert("yo");
// });

$(function() {


	$('.circle.available').on('click', function(){
		$('.formContainer').css('display', 'flex');

		//return tableNo on reservation form
		$('.tableNo').text("Table Number: " + $(this).text());
		$(this).removeClass('available');
	});

	$('.closeForm').on('click', function(){
		$(".formContainer").css('display', 'none');
	});

	$('.button').on('click', function(){
		$(this).removeClass('available');
		//$(this).addClass('reserved');
		$(".formContainer").css('display', 'none');
	});


// after lunch
// √) remove the input for table number and append the Table Num to the text
// √) get the damn modal to close
// _) make submit reserve a table 

});
// end of wrapping function!!