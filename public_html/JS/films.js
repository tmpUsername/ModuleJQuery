/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var charge = function(){
    $.getJSON("JSON/films.json", function(data) {
        var res= "<ul>";
        $.each(data.films, function (i, film){
            res += "<li>" + film.titre + "</li>\n";
        });
        $('section').html(res + "</ul>");
    });
};

$(document).ready(function() {
    $(':input').on("click", function () {
       charge(); 
    });
});
