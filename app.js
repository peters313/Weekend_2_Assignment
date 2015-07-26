console.log('We are up and running!');

var searchUser;

$(document).ready(function(){
	$('body').on('click', '.submit', function(){
			event.preventDefault();
			searchUser = $('.search').val();
			console.log($('.search'));
			console.log("Search User " + searchUser);
			search(searchUser);
		});
	});

function callback(data){
	console.log(data.name);
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