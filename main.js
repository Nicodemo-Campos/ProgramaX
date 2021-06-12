$(document).ready(function(){
	$.ajax({
		url: "datos_pagina",
		headers: {"Authorization": getCookie('token2')},
		dataType: "json",
	})
	.done(function(data) {
	})//done	
})