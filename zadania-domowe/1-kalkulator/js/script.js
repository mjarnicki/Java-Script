'use strict';
$("document").ready(function () {
    var data1 = 0;
    var data2 = 0;
    var operation = 0;
    var result = 0;
   $("#b1").click(function(){$("#result").append("1");});
   $("#b2").click(function(){$("#result").append("2");});
   $("#b3").click(function(){$("#result").append("3");});
   $("#b4").click(function(){$("#result").append("4");});
   $("#b5").click(function(){$("#result").append("5");});
   $("#b6").click(function(){$("#result").append("6");});
   $("#b7").click(function(){$("#result").append("7");});
   $("#b8").click(function(){$("#result").append("8");});
   $("#b9").click(function(){$("#result").append("9");});
   $("#b0").click(function(){$("#result").append("0");});
   $("#dot").click(function(){$("#result").append(".");});

    $("#modulus").click(function(){
        data1 = Number($("#result").text());
        operation = "modulus";
        $("#result").text("");
    });
    $("#addition").click(function(){
        data1 = Number($("#result").text());
        operation = "addition";
        $("#result").text("");
    });
    $("#subtraction").click(function(){
        data1 = Number($("#result").text());
        operation = "subtraction";
        $("#result").text("");
    });
    $("#muliply").click(function(){
        data1 = Number($("#result").text());
        operation = "muliply";
        $("#result").text("");
    });
    $("#divide").click(function(){
        data1 = Number($("#result").text());
        operation = "divide";
        $("#result").text("");
    });
    
    $("#equal").click(function(){
        data2 = Number($("#result").text());
        
        if(operation == "addition"){
            result = data1 + data2;
            $("#result").text(result);
            data1 = 0;
            data2 = 0;
        }
        else if(operation == "subtraction"){
            result = data1 - data2;
            $("#result").text(result);
            data1 = 0;
            data2 = 0;
        }
        else if(operation == "muliply"){
            result = data1 * data2;
            $("#result").text(result);
            data1 = 0;
            data2 = 0;
        }
        else if(operation == "divide"){
            result = data1 / data2;
            $("#result").text(result);
            data1 = 0;
            data2 = 0;
        }
        else if(operation == "modulus"){
            result = data1 % data2;
            $("#result").text(result);
            data1 = 0;
            data2 = 0;
        };
        
        $("#reset").click(function(){
        data1 = 0;
        data2 = 0;
        $("#result").text("");
    });
        
    });
    
});
