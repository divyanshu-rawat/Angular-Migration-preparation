angular.module('app').component('results',{ 

	templateUrl:'/admin/results.html',
	bindings:{
		allSessions:'='
	},

    controller:function() {
 
  this.allSessions.sort(function(session1, session2) {
    // reverse order
    return session2.voteCount - session1.voteCount;
  })
  
  this.sessionsByVoteDesc = this.allSessions;

}

})