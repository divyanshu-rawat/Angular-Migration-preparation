angular.module('app').service('sessions', (function () {
    function session($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    session.prototype.getSessionsByUser = function (userId) {
        var dfd = this.$q.defer();
        this.$http.get('/api/sessions/user/' + userId).then(function (response) {
            dfd.resolve(response.data);
        }, function () {
            dfd.reject();
        });
        return dfd.promise;
    };
    session.prototype.getAllSessions = function () {
        var dfd = this.$q.defer();
        this.$http.get('/api/sessions').then(function (response) {
            dfd.resolve(response.data);
        }, function () {
            dfd.reject();
        });
        return dfd.promise;
    };
    session.prototype.createNewSession = function (newSession) {
        return this.$http.post('/api/sessions', newSession);
    };
    session.prototype.getNextUnreviewedSession = function (userId) {
        return this.$http.get("/api/users/" + userId + "/randomUnreviewedSession");
    };
    session.prototype.addReviewedSession = function (userId, sessionId) {
        return this.$http.post('/api/users/' + userId + '/reviewSession/' + sessionId);
    };
    session.prototype.incrementVote = function (sessionId) {
        return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/');
    };
    session.prototype.getUnreviewedCount = function (userId) {
        return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
    };
    return session;
}()));
//# sourceMappingURL=sessions.js.map