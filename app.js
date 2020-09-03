$(document).ready(function(){
	var movie_name;
	$('#search').click(function(){
		movie_name=$('#movie_name').val()
		alert(movie_name);
		$.ajax({
			url:'http://myflaskmovie-env.eba-amirmppw.us-east-2.elasticbeanstalk.com/view/' + movie_name,
			success:function(data){
				if(data['response']==200){
					var name=data['data']['name'];
					var actor=data['data']['actor'];
					var year=data['data']['year'];
					var poster=data['data']['poster'];
					$('#name').text(name);
					$('#actor').text(actor);
					$('#year').text(year);
					$('#poster').html('<img src="'+ poster +'"/>');
					}else{
						$('#name').text("Movie not found");
					}
			},
			error:function(){
				alert("some Error!!!");
			}
		})
	})
});