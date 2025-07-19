class Endpoints {

    static JAVA_BASE_URL = 'http://localhost:8080';
    static USER_BASE_PATH = '/users';
    static values() {
        return [this.JAVA_BASE_URL, this.USER_BASE_PATH];
    }

}
Object.freeze(Endpoints);
module.exports = Endpoints;