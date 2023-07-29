function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMemberCtrl',
    scope: {
      member: '=',
      index: '='
    }
  };
}