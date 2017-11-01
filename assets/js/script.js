
// this code makes the form reset on cancel WTF?


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
		cancelForm();
	});

	// cancel function
	function cancelForm(){
		$('.selected').removeClass('selected');
		$(".formContainer").css('display', 'none');
	};

	// close form
	$('.closeForm').on('click', function(){
		cancelForm();
		//return false;
	});

});
// end of wrapping function!!



//Ross calls this a document-ready YO, confirms page is loading properly
/* $(function() {
     alert("yo");
 });
 */
