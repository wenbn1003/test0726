window.onload = function() {
    var _elmWeight = parseInt(document.getElementById("weight").value);
    var _elmHeight = parseInt(document.getElementById("height").value);
    var _elmBtnCompute = document.getElementById('btnCompute');
    var _elmResultBmi = document.getElementById('resultBmi');

    // if (_elmWeight === null || _elmWeight.id != 'weight') {
    //     console.log("is null")
    //     return;
    // }
    // if (_elmHeight === null) {
    //     console.log("is null")
    //     return;
    // }
    // if (_elmBtnCompute === null) {
    //     console.log("is null")
    //     return;
    // }
    // if (_elmResultBmi === null) {
    //     console.log("is null")
    //     return;
    // }
    _elmBtnCompute.onclick = function test() {

        resultBmi.innerHTML = _elmWeight + _elmHeight;
    }



}