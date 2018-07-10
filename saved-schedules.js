function numberOfHours(f,s){
    var firstHour = Number(f.split(":")[0]);
    var secondHour = Number(s.split(":")[0]);
    return secondHour - firstHour;
}

function checkHours(param, firstHour, secondHour, num){
    var nextNum = num + 1;
    var splitName = param.professor.split(",")
    $('#tb #cell-'+num).html(param.subject +"</br>NRC - "+param.nrc+"</br>Prof. "+splitName[0]+"</br>"+splitName[1]);
    if(firstHour != secondHour){
        var numHours = numberOfHours(firstHour,secondHour);
        if(numHours == 1){
            $('#tb #cell-'+num).attr('rowspan',2);
            $('#tb #cell-'+nextNum).hide();
        }
        else if(numHours > 1) {
            $('#tb #cell-'+num).attr('rowspan',3);
            $('#tb #cell-'+nextNum).hide();
            nextNum = nextNum+1;
            $('#tb #cell-'+nextNum).hide();
        }
    }
}

function updateShedule(param, num){
    for(var i = 0; i < param[num].length; i++){
        if(param[num][i].mon != null){
            if(param[num][i].mon.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,1);
            if(param[num][i].mon.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,2);  
            if(param[num][i].mon.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,3);
            if(param[num][i].mon.firstHour == "10:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,4);
            if(param[num][i].mon.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,5);
            if(param[num][i].mon.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,6);
            if(param[num][i].mon.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,7);
            if(param[num][i].mon.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,8); 
            if(param[num][i].mon.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,9);
            if(param[num][i].mon.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,10); 
            if(param[num][i].mon.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,11);
            if(param[num][i].mon.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,12); 
            if(param[num][i].mon.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,13);
                if(param[num][i].mon.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].mon.firstHour, param[num][i].mon.secondHour,14);                                      
        }

        if(param[num][i].tue != null){
            if(param[num][i].tue.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,15);
            if(param[num][i].tue.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,16); 
            if(param[num][i].tue.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,17);
            if(param[num][i].tue.firstHour == "10:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,18);
            if(param[num][i].tue.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,19);
            if(param[num][i].tue.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,20);
            if(param[num][i].tue.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,21);
            if(param[num][i].tue.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,22); 
            if(param[num][i].tue.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,23);
            if(param[num][i].tue.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,24); 
            if(param[num][i].tue.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,25);
            if(param[num][i].tue.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,26); 
            if(param[num][i].tue.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,27);
            if(param[num][i].tue.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].tue.firstHour, param[num][i].tue.secondHour,28);
        }

        if(param[num][i].wed != null){
            if(param[num][i].wed.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,29);
            if(param[num][i].wed.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,30); 
            if(param[num][i].wed.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,31);
            if(param[num][i].wed.firstHour == "10:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,32);
            if(param[num][i].wed.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,33);
            if(param[num][i].wed.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,34);
            if(param[num][i].wed.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,35);
            if(param[num][i].wed.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,36); 
            if(param[num][i].wed.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,37);
            if(param[num][i].wed.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,38); 
            if(param[num][i].wed.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,39);
            if(param[num][i].wed.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,40); 
            if(param[num][i].wed.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,41);
            if(param[num][i].wed.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].wed.firstHour, param[num][i].wed.secondHour,42);
        }


        if(param[num][i].thu != null){
            if(param[num][i].thu.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,43);
            if(param[num][i].thu.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,44);  
            if(param[num][i].thu.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,45);
            if(param[num][i].thu.firstHour == "10:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,46);
            if(param[num][i].thu.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,47);
            if(param[num][i].thu.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,48);
            if(param[num][i].thu.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,49);
            if(param[num][i].thu.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,50); 
            if(param[num][i].thu.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,51);
            if(param[num][i].thu.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,52); 
            if(param[num][i].thu.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,53);
            if(param[num][i].thu.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,54); 
            if(param[num][i].thu.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,55);
            if(param[num][i].thu.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].thu.firstHour, param[num][i].thu.secondHour,56);
        }

        if(param[num][i].fri != null){
            if(param[num][i].fri.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,57);
            if(param[num][i].fri.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,58); 
            if(param[num][i].fri.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,59);
            if(param[num][i].fri.firstHour == "10:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,60);
            if(param[num][i].fri.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,61);
            if(param[num][i].fri.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,62);
            if(param[num][i].fri.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,63);
            if(param[num][i].fri.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,64); 
            if(param[num][i].fri.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,65);
            if(param[num][i].fri.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,66); 
            if(param[num][i].fri.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,67);
            if(param[num][i].fri.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,68); 
            if(param[num][i].fri.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,69);
            if(param[num][i].fri.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].fri.firstHour, param[num][i].fri.secondHour,70);
        }

        if(param[num][i].sat != null){
            if(param[num][i].sat.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,71);
            if(param[num][i].sat.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,72); 
            if(param[num][i].sat.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,73);
            if(param[num][i].sat.firstHour == "10:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,74);
            if(param[num][i].sat.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,75);
            if(param[num][i].sat.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,76);
            if(param[num][i].sat.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,77);
            if(param[num][i].sat.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,78); 
            if(param[num][i].sat.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,79);
            if(param[num][i].sat.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,80); 
            if(param[num][i].sat.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,81);
            if(param[num][i].sat.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,82); 
            if(param[num][i].sat.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,83);
            if(param[num][i].sat.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].sat.firstHour, param[num][i].sat.secondHour,84);
        }

        if(param[num][i].sun != null){
            if(param[num][i].sun.firstHour == "07:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,85);
            if(param[num][i].sun.firstHour == "08:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,86); 
            if(param[num][i].sun.firstHour == "09:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,87);
            if(pparam[num][i].sun.firstHour== "10:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,88);
            if(param[num][i].sun.firstHour == "11:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,89);
            if(param[num][i].sun.firstHour == "12:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,90);
            if(param[num][i].sun.firstHour == "13:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,91);
            if(param[num][i].sun.firstHour == "14:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,92); 
            if(param[num][i].sun.firstHour == "15:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,93);
            if(param[num][i].sun.firstHour == "16:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,94); 
            if(param[num][i].sun.firstHour == "17:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,95);
            if(param[num][i].sun.firstHour == "18:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,96); 
            if(param[num][i].sun.firstHour == "19:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,97);
            if(param[num][i].sun.firstHour == "20:00")
                checkHours(param[num][i], param[num][i].sun.firstHour, param[num][i].sun.secondHour,98);
        }

    }
}

function myFunction(){
    var subjectList = localStorage['savedSchedules'];
    var json = JSON.parse(subjectList);
    var num = 0;
    var savedSche = [];
    $('.loader').hide();
    $('#tb').show();
    console.log(json[0]);
    var scheduleClone = $('#tb').clone().attr('id', "or");
    $('.schedule-title').html("Horario Tentativo 1");
    updateShedule(json,0);
     $('#f-arrow').click(function(){
        if(num < json.length-1){
            num = num + 1;
            var aux = num+1;
            $('#tb').replaceWith(scheduleClone.clone().attr('id', 'tb'));
            $('#tb').children().attr('rowspan',1);
            $('.schedule-title').html("Horario Tentativo "+aux); 
            updateShedule(json,num);
            $('#tb').children().show();
            $('#b-arrow').css('background-image', 'url("img/arrow_back_white_48x48.png")');
        }
        else
           $('#f-arrow').css('background-image', 'url("img/arrow_forward_grey_48x48.png")'); 
    });
    $('#b-arrow').click(function(){
        if(num > 0){
            num = num - 1;
            var aux = num+1;
            $('#tb').replaceWith(scheduleClone.clone().attr('id', 'tb'));
            $('.schedule-title').html("Horario Tentativo "+aux); 
            updateShedule(json,num);
            $('#f-arrow').css('background-image', 'url("img/arrow_forward_white_48x48.png")');
        }
        else
            $('#b-arrow').css('background-image', 'url("img/arrow_back_grey_48x48.png")');
        
    });

    $('.delete-btn').click(function(){

        if(num > 0){
            json.splice(num,1);
            var json_str = JSON.stringify(json);
            localStorage.setItem('savedSchedules', json_str);
            num = num - 1;
            var aux = num+1;
            $('#tb').replaceWith(scheduleClone.clone().attr('id', 'tb'));
            $('.schedule-title').html("Horario Tentativo "+aux); 
            updateShedule(json,num);
        }
        else if(num == 0){
            console.log(json.length);
            console.log(num);
            json.splice(num,1);
            var json_str = JSON.stringify(json);
            localStorage.setItem('savedSchedules', json_str);
            if((json.length) > 1){
                aux = num + 1;
                $('#tb').replaceWith(scheduleClone.clone().attr('id', 'tb'));
                $('.schedule-title').html("Horario Tentativo "+aux); 
                updateShedule(json,num+1);
            }
            else{
                var a = new Array();
                localStorage.setItem('savedSchedules', JSON.stringify(a));
                $('.loader').hide();
                $('#tb').hide();
                $('#b-arrow').css('background-image', 'url("img/arrow_back_grey_48x48.png")');
            }
        }
    });
}


$(document).ready(function() {
    $('.nxt-btn').click(function(){
        window.location.href = "index.html"
    });
    var a = JSON.parse(localStorage['savedSchedules']);
    console.log(a.length);
    if(typeof a == 'undefined'){
        alert("No existen horarios guardados");
    }
    else if(a.length == 0){

        alert("No existen horarios guardados");
        
    }
    else
        myFunction();
});