

var fstSemester = [
"Geometría Plana y Trigonometría.", 
"Matemática Básica.", 
"Introducción a la Informática.",
"Prácticas de Introducción a la Informática.", 
"Comprensión y Producción de Textos.",
"Identidad, Liderazgo y Compromiso I."
];

var sndSemester = [
"Cálculo I.",
"Lógica Computacional.",
"Algoritmos y Programación I.",
"Prácticas de Algoritmos y Programación I.", 
"Identidad, Liderazgo y Compromiso II."
];

var trdSemester = [
"Cálculo II.",
"Física General.",
"Matemáticas Discretas.",
"Algoritmos y Programación II.",
"Prácticas de Algoritmos y Programación II.",
];

var frthSemester = [
"Cálculo III.",
"Física Eléctrica.",
"Laboratorio de Física Eléctrica.",
"Estructura del Computador.",
"Algoritmos y Programación III.",
"Prácticas de Algoritmos y Programación III.",
"Ecología, Ambiente y Sustentabilidad."
];

var fthSemester = [
"Cálculo IV.",
"Circuitos Electrónicos.",
"Prácticas de Circuitos Electrónicos.",
"Sistemas de Operación.",
"Ingeniería del Software.",
"Interacción Humano Computador."
];

var sxthSemester = [
"Cálculo Numérico",
"Prácticas de Cálculo Numérico.",
"Redes de Computadores I.",
"Prácticas Redes de Computadores I.",
"Arquitectura del Computador.",
"Prácticas de Arquitectura del Computador.",
"Sistemas de Bases de Datos I."
];

var svthSemester = [
"Programación Lineal.",
"Redes de Computadores II",
"Prácticas Redes de Computadores II.",
"Metodologia del Software.",
"Sistemas de Bases de Datos II.",
"Inglés I.",
"Contabilidad General."
];

var ethSemester = [
"Investigación de Operaciones.",
"Redes de Computadores III.",
"Seminario de Trabajo de Grado.",
"Desarrollo de Software.",
"Ingeniería Económica.",
"Inglés II."
];

var nthSemester = [
"Seguridad Computacional.",
"Prácticas de Seguridad Computacional.",
"Sistemas Distribuidos.",
"Inglés Técnico."
];

var tnthSemester = [
"Ética Profesional.",
"Evaluación de Sistemas Informáticos.",
"Gestión de Proyectos de Software."
];

function deleteAll(num){
	$('#btn-del').click(function(){
		$("#subject-list-3").empty();
		$("#subject-list-4").empty();
		num = 0;
	});
}

function getSubjects(params){
	for (var i = params.length-1; i >= 0; i--) {
		if(i<= 4)
			$("#subject-list-1").prepend("<div><li>"+params[i]+"</li></div>")

		else{
			$("#subject-list-2").prepend("<div><li>"+params[i]+"</li></div>")
			$('#slc-2').show();
		}
	}
	$("#subject-list-1 div").addClass("subject");
	$("#subject-list-2 div").addClass("subject");
}

function updateSubjectList(){
	var num = 0;
	$('#slc-1').on("click", ".subject", function(event) {
		if(event.target.nodeName == "LI")
			$(event.target).parent().hide();
		else
			$(event.target).hide();
		var text = $(event.target).text();
		if(num <= 4){
    		$("#subject-list-3").prepend("<div><li>"+text+"</li></div>");
    		num = num+1;
    	}
    	else if ((num >4) && (num <10)){
    		$("#subject-list-4").prepend("<div><li>"+text+"</li></div>");
    		num = num+1;
    	}
   });
	$('#slc-2').on("click", ".subject", function(event) {
		if(event.target.nodeName == "LI")
			$(event.target).parent().hide();
		else
			$(event.target).hide();
		var text = $(event.target).text();
		if(num <= 4){
    		$("#subject-list-3").prepend("<div><li>"+text+"</li></div>");
    		num = num+1;
    	}
    	else if ((num >4) && (num <10)){
    		$("#subject-list-4").prepend("<div><li>"+text+"</li></div>");
    		num = num+1;
    	}
   });
	deleteAll(num);
}

function showSubjectList(){
	$('#fst-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(fstSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#snd-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(sndSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#trd-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(trdSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#frth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(frthSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#fth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(fthSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });
	$('#sxth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(sxthSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#svth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(svthSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#eth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(ethSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#nth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	//$('#slc-2').hide();
    	getSubjects(nthSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });

	$('#tnth-semester').click(function() {
    	//$('.semesters').replaceWith($('#semester-subjects'));
    	$('#slc-2').hide();
    	getSubjects(tnthSemester);
    	$('#semester-subjects').show();
    	$( '#back-bttn' ).show();
   });
}

function back(){
	$( '#back-bttn' ).click(function() { 
		//$('.semesters').replaceWith(param.clone());
		$( '#semester-subjects' ).hide();
		$("#subject-list-1").empty();
		$("#subject-list-2").empty();
		$( '#back-bttn' ).hide();
	});
}

var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getSubjectList(param){
	$('#btn-const').click(function(){
		$("#slc-3 li").each(function() { param.push($(this).text()) });
		$("#slc-4 li").each(function() { param.push($(this).text()) });
		var json_str = JSON.stringify(param);
		localStorage.setItem('subjects', json_str);
		window.location.href = "shedules.html"
	});
}

$(document).ready(function() {
	var subjectList = [];
	var divClone = $(".semesters").clone();
	$( '#semester-subjects' ).hide();
	$( '#back-bttn' ).hide();
    showSubjectList(fstSemester);
    updateSubjectList();
    back();
    getSubjectList(subjectList);
});