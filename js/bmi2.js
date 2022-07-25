window.onload = function bmiorz(){

var _elmBtnCompute = document.getElementById('btnCompute');

_elmBtnCompute.onclick = function test() {
    var _elmWeight = parseInt(document.getElementById("weight").value);
    var _elmHeight = parseInt(document.getElementById("height").value);
    var test = "";


    // test = _elmWeight + _elmHeight;
    test = _elmWeight / ((_elmHeight / 100) * (_elmHeight / 100));

    if (_elmWeight<=0 & _elmHeight>0){
        resultBmi.innerHTML ="親~體重錯了喔";
    }

    else if(_elmHeight<=0 & _elmWeight>0){
        resultBmi.innerHTML ="親~身高錯了喔"; 
    }
    
    else if (test.toFixed(2) > 0){
    resultBmi.innerHTML = test.toFixed(2);
    }
    else {
        resultBmi.innerHTML ="你一定是來找碴的";
        $('div').fadeOut(7500); 
    }



    if (test.toFixed(2) >= 35 & test.toFixed(2) < 99) {
        resultBmi.style.color = "#990099";
        orz.innerHTML = '<h2 class="color-5">' + "重度肥胖!!幫你QQ囉" + '</h2>' + 
        '<img src="images/a1.jpg">';

    } else if (test.toFixed(2) < 35 & test.toFixed(2) >= 30) {
        resultBmi.style.color = "#ff0000";
        orz.innerHTML = '<h2 class="color-4">' + "中度肥胖!!努力一下唄" + '</h2>'+ 
        '<img src="images/a2.jpg">';
    } else if (test.toFixed(2) < 30 & test.toFixed(2) >= 27) {
        resultBmi.style.color = "#ff7700";
        orz.innerHTML = '<h2 class="color-3">' + "輕度肥胖!!該動一動了" + '</h2>'+ 
        '<img src="images/a3.jpg">';
    } else if (test.toFixed(2) < 27 & test.toFixed(2) >= 24) {
        resultBmi.style.color = "#ffae00";
        orz.innerHTML = '<h2 class="color-2">' + "稍重!!稍微少吃點" + '</h2>'+ 
        '<img src="images/a4.jpg">';
    } else if (test.toFixed(2) < 24 & test.toFixed(2) >= 18.5) {
        resultBmi.style.color = "#009900";
        orz.innerHTML = '<h2 class="color-1">' + "標準!!我好羨慕你" + '</h2>'+ 
        '<img src="images/a5.jpg">';
    } else if (test.toFixed(2) < 18.5 & test.toFixed(2) > 0) {
        resultBmi.style.color = "#6699ff";
        orz.innerHTML = '<h2 class="color-0">' + "過輕!!我好忌妒你" + '</h2>'+
        '<img src="images/a6.jpg">';
    } else {
        orz.innerHTML = '<div class="fontcss"><h2>' + "確定你是人嗎?" + '</h2></div>'+
        '<img src="images/a7.jpg">';
        resultBmi.style.color = "black";
    }
}


    document.getElementById("comeon").onclick = function(){
        alert("我只是來刷個存在感而已(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");
        $('div').fadeIn(7500); 
        setTimeout(function(){ location.reload(); }, 6000);
        
    }


}