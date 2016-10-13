/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var charge = function(){
    $.getJSON("JSON/films.json", function(data) {
        $("section").append("<table></table>");
        $.each(data.films, function (i, film){
            $("table").append("<tr><td>" + film.titre + "</td><td>" + film.synopsis + "</td></tr>");
        });
    });
};

$(document).ready(function() {
    $(':input').on("click", function () {
       charge(); 
    });
});
