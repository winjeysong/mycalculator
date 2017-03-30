var res = "";
var flag = false;  //用于标记是否按下“=”键
$(document).ready(function(){
  $(".calculator>p").mouseover(function(){
    $(".textbox").val("look at winjeysong")
  });
  $(".calculator>p").mouseout(function(){
    $(".textbox").val("")
  });
  $("button").click(function(){
    var inputKey = $(this).attr("value");
    if (inputKey === "AC"){
      res = "";
      $(".textbox").val(res);
    }
    else if (inputKey === "CE"){
      res = res.slice(0,-1);
      $(".textbox").val(res);
    }
    else if (inputKey == parseInt(inputKey) || inputKey === "/" || inputKey === "*" || inputKey === "-" || inputKey === "+" || inputKey === "%" || inputKey === "." || inputKey === "(" || inputKey === ")"){
      if (flag === false){
        res += inputKey;
        $(".textbox").val(res);
      }
      else{
        res = inputKey;
        $(".textbox").val(res);
        flag = false;
      } 
    }
    else if (inputKey === "="){
      $(".textbox").val(eval(res));
      flag = true;
    }
  });
});
