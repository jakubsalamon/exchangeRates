export function getDollar() {

    const url = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
    return callXhr("GET", url);

}
export function getEuro() {

    const url = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/';
    return callXhr("GET", url);

}
export function getYen() {

    const url = 'http://api.nbp.pl/api/exchangerates/rates/a/jpy/';
    return callXhr("GET", url);

}
export function getRubel() {

    const url = 'http://api.nbp.pl/api/exchangerates/rates/a/rub/';
    return callXhr("GET", url);

}

const callXhr = (method, url, as = false) => {

    let xhr = new XMLHttpRequest();
    xhr.open(method, url, as);
    xhr.send();
    let response = JSON.parse(xhr.response);
    let result = response.rates[0].mid;
    return result;
    
}
