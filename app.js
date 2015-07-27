console.log('We are up and running!');

var searchUser;

$(document).ready(function(){
	$('body').on('click', '.submit', function(event){
			event.preventDefault();
			searchUser = $('.search').val();
			console.log($('.search'));
			console.log("Search User " + searchUser);
			search(searchUser);
		});
	});

function callBack(data){
	console.log(data.name);
	$('.results').html("");
	$('.results').append("<img src='"+data.avatar_url+"' />");
	$('.results').append("<p class='info'>User Login: "+data.login+"</p>");
	$('.results').append("<p class='info'>Link to Github Page: <a href='"+data.html_url+"'target='blank'>"+data.html_url+"</a></p>");
	$('.results').append("<p class='info'>Bio Information: "+data.bio+"</p>");
}

function search(query){
	$.ajax({
		url: 'https://api.github.com/users/'+searchUser+'?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		success: function(data){
			console.log(data);
			callBack(data);
		}
	});
}
// function callBack(data){
// 	$.each(data, function(index, object){
// 		$('#results').append(object.name + ',');
// 	});
// }