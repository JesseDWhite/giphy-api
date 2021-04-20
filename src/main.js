import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifService from './js/business-logic.js';

// API URL template: api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&limit=1&q=searchterm
// start with a successful search for just one word

$(document).ready(function () {
    $('#search-submit-btn').click(function () {
        let searchTerms = $('#search-terms').val();
        const urlSearchTerms = `&q=${searchTerms}`;
        $('#search-terms').val("");
        let promise = GifService.gitGif(urlSearchTerms);

        promise.then(function (response) {
            const body = JSON.parse(response);
            $('#search-results').html("");
            $('#search-results').html(`<img src="${body.data[0].images.fixed_height.url}"> alt="${body.data[0].title}"`).show();
        }, function (error) {
            console.log(error);
        });
    });
});
