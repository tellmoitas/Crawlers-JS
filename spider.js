var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');



request('http://www.imdb.com/chart/moviemeter', function(err, result, body) {
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    $('.lister-list tr').each(function() {
        var title = $(this).find('.titleColumn a').text().trim();
        var rating = $(this).find('.imdbRating strong').text().trim();
        console.log('Título: ' + title);

        fs.appendFile('imdb.txt', title + ' - ' + rating + '\n');
    })
})
