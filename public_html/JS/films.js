/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var charge = function(){
    $.getJSON("JSON/films.json", function(data) {
        if ( $("section").has("table").length == 0 ){
            $("section").append("<table></table>");
        }
        data.films.forEach(function (film){
            $("table").append("<tr><td>" + film.id  + "</td><td>" + film.titre + "</td><td>" + film.synopsis + "</td></tr>");
        });
    });
};

$(document).ready(function() {
    $(':input').on("click", function () {
       charge(); 
    });
});
