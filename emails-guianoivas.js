var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://guianoivasbrasil.com.br/fornecedores/?wpbdp_view=all_listings', 
    function(err, result, body) {
        if (err) console.log('Erro: ' + err);

        var $ = cheerio.load(body);

        $('.listing-details').each(function() {
            //var title = $(this).find('.listing-title a').text().trim();
            var email = $(this).find
            ('.wpbdp-field-email a').text().trim();
            
            //console.log(email + ', ');

            fs.appendFile('email.txt', email + ',');
        })

    })

for (var i=1; i<10; i++){

    request('http://guianoivasbrasil.com.br/fornecedores/page/'+i+'/?wpbdp_view=all_listings', 
    function(err, result, body) {
        if (err) console.log('Erro: ' + err);

        var $ = cheerio.load(body);

        $('.listing-details').each(function() {
            //var title = $(this).find('.listing-title a').text().trim();
            var email = $(this).find
            ('.wpbdp-field-email a').text().trim();
            
            //console.log(email + ', ');

            fs.appendFile('email.txt', email + ',');
        })

    })
}
