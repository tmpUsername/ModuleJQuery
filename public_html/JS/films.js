/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var charge = function(){
    $.getJSON("JSON/films.json", function(data) {
        if ( $("section").has("table").length == 0 ){
            $("section").append("<table><thead><tr><th>Id</th><th>Titre</th><th>Synopsis</th></tr></thead><tbody></tbody></table>");
        }
        data.films.forEach(function (film){
            $("tbody").append("<tr><td>" + film.id  + "</td><td>" + film.titre + "</td><td>" + film.synopsis + "</td></tr>");
        });
    });
};

$(document).ready(function() {
    $(':input').on("click", function () {
       charge(); 
    });
});
