export default {
    baseUrl: 'https://restcountries.eu/rest/',
    version: 'v2',
    getFullBaseUrl: function() {
        return `${this.baseUrl}${this.version}/`;
    }
}