export default class GifService {
    static getGif(urlSearchTerms) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `http://api.giphy.com/v1/gifs/search?&api_key=${process.env.API_KEY}&limit=1${urlSearchTerms}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);

                } else {
                    reject(request.response);
                }
            }
            request.open("GET", url, true);
            request.send();
        })
    }
}