/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var chargeBloc = function (bloc) {
    $('section').load(bloc);
};


$(document).ready(function () {
    $('input').on("click", function () {
        chargeBloc("bloc" + $(this).attr("value") + ".html");
    });
});