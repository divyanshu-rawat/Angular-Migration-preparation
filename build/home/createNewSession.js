angular.module('app').component('createNewSession', {
    templateUrl: '/home/createNewSession.html',
    bindings: {
        userSessions: '='
    },
    controller: function (toastr, currentIdentity, sessions) {
        var _this = this;
        this.create = function () {
            var newUserSession = {
                title: _this.title,
                length: parseInt(_this.length),
                abstract: _this.abstract,
                userFirstName: currentIdentity.currentUser.firstName,
                userLastName: currentIdentity.currentUser.lastName,
                userId: currentIdentity.currentUser.id,
            };
            sessions.createNewSession(newUserSession).then(function (response) {
                console.log(response);
                _this.userSessions.push(response.data);
            });
        };
    }
});
//# sourceMappingURL=createNewSession.js.map