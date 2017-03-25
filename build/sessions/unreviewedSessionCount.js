angular.module('app').service('unreviewedSessionCount', (function () {
    function unsession(sessions, currentIdentity) {
        this.value = 0;
        this.sessions = sessions;
        this.currentIdentity = currentIdentity;
    }
    unsession.prototype.updateUnreviewedSessionCount = function () {
        var _this = this;
        this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
            .then(function (response) {
            _this.value = response.data.count;
        });
    };
    return unsession;
}()));
//# sourceMappingURL=unreviewedSessionCount.js.map