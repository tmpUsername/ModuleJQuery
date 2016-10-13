/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var change = true;

$(document).ready(function(){
    $('input').on("click", function(){
        if (change){
            $("#change").hide();
        } else {
            $("#change").show();
        }
        change = !change;
    });
});