'use strict';

function bt2021(){
            container01.style.display="";
            container02.style.display="none";
            container03.style.display="none";
            container04.style.display="none";
};

function bt2020(){
            container01.style.display="none";
            container02.style.display="";
            container03.style.display="none";
            container04.style.display="none";
};
function bt2019(){
            container01.style.display="none";
            container02.style.display="none";
            container03.style.display="";
            container04.style.display="none";
};
function bt2018(){
            container01.style.display="none";
            container02.style.display="none";
            container03.style.display="none";
            container04.style.display="";
};



$(document).ready(function(){
		$('.button').each(function(index){
			$(this).attr('button-index', index);
		}).click(function(){
			var index = $(this).attr('button-index');
			$('.button[button-index=' + index + ']').addClass('clicked_button');
			$('.button[button-index!=' + index + ']').removeClass('clicked_button');
		});


	});

$(document).ready(function(){
		$('.button2').each(function(index){
			$(this).attr('button-index', index);
		}).click(function(){
			var index = $(this).attr('button-index');
			$('.button2[button-index=' + index + ']').addClass('clicked_button2');
			$('.button2[button-index!=' + index + ']').removeClass('clicked_button2');
		});


	});
