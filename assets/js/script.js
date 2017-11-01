
// this code makes the form reset on close WTF?


$(function() {

	// reserve table, open form, set selected to note which table
	$('.circle.available').on('click', function(){
		if( $(this).attr('class') === 'circle reserved'){
			return;
		} 
		$('.tableNo').text("Table Number: " + $(this).text());
		$(this).addClass('selected');
		$('.formContainer').css('display', 'flex');
	});

	// reserve button
	$('button').on('click', function(){
		$('.selected').removeClass('available');
		$('.selected').addClass('reserved');
		$('.selected').removeClass('selected');
		$(".formContainer").css('display', 'none');
		// I would like to try to reuse the function for closeform onclick
	});

	// close form
	$('.closeForm').on('click', function (){
		//$('.selected').removeClass('selected');
		$(".formContainer").css('display', 'none');
	});

});
// end of wrapping function!!



//Ross calls this a document-ready YO, confirms page is loading properly
/* $(function() {
     alert("yo");
 });
 */
