//MENU DESPEGABLE

function openNav() {
    document.getElementById("MenuDespegable").style.width = "250px";
    document.getElementById("push").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("MenuDespegable").style.width = "0";
    document.getElementById("push").style.marginLeft = "0";
}


//INDICADOR SCROLL

// s'executa quan fem scroll
window.onscroll = function() {indicadorscroll()};

function indicadorscroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// s'executa quan fem scroll
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//ICONOS COLOR (es treura segurament)
function FuncioPodium(){
	var podium = document.getElementById('iPodium');
	var perfil = document.getElementById('iPerfil');
	var logros = document.getElementById('iLogros');
	var post = document.getElementById('iPost');

	if(podium.src.match("recursos/img/podium.png")){

		podium.src = "recursos/img/whitepodium.png"
		//Canviem les fotos a default
		perfil.src = "recursos/img/24638-1.png"
		post.src = "recursos/img/post.png"
		logros.src = "recursos/img/medal-icon.png"
	}
}

function FuncioLogros(){
	var podium = document.getElementById('iPodium');
	var perfil = document.getElementById('iPerfil');
	var logros = document.getElementById('iLogros');
	var post = document.getElementById('iPost');

	if(logros.src.match("recursos/img/medal-icon.png")){

		logros.src = "recursos/img/whitemedal.png"
		//Canviem les fotos a default
		podium.src = "recursos/img/podium.png"
		post.src = "recursos/img/post.png"
		perfil.src = "recursos/img/24638-1.png"
	}
}

function FuncioPost(){
	var podium = document.getElementById('iPodium');
	var perfil = document.getElementById('iPerfil');
	var logros = document.getElementById('iLogros');
	var post = document.getElementById('iPost');

	if(post.src.match("recursos/img/post.png")){

		post.src = "recursos/img/whitepost.png"
		//Canviem les fotos a default
		podium.src = "recursos/img/podium.png"
		perfil.src = "recursos/img/24638-1.png"
		logros.src = "recursos/img/medal-icon.png"
	}
}

function FuncioPerfil(){
	var podium = document.getElementById('iPodium');
	var perfil = document.getElementById('iPerfil');
	var logros = document.getElementById('iLogros');
	var post = document.getElementById('iPost');

	if(perfil.src.match("recursos/img/24638-1.png")){

		perfil.src = "recursos/img/whiteperfil.png"
		//Canviem les fotos a default
		podium.src = "recursos/img/podium.png"
		logros.src = "recursos/img/medal-icon.png"
		post.src = "recursos/img/post.png"
	}
}

//Angular MySQL
var app = angular.module('nbApp', []);
app.controller('postController', function($scope, $http) {
    $http.post("index.php")
      .then(function (response) {$scope.publicacions = response.data.records;});
});
