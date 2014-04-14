$(function(){
	$(".datepicker").datepicker({ format: 'dd-mm-yyyy' });
	$('.dataTables').dataTable();
	var location =  window.location.href;
	$('.nav a').each(function(){
		if(this.href == location){
			$(this).parent('li').addClass('active');
		}
	})
})