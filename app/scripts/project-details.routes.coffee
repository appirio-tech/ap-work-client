  'use strict';

  config = ($stateProvider) ->
    states = {}

    initializeCopilotWork = ($stateParams, ProjectDetailsService) ->
      return ProjectDetailsService.initializeCopilotWork $stateParams.id if $stateParams.id

      false

    states['project-details'] =
      url         : '/project-details/:id'
      title       : 'Claim Project'
      controller  : 'ProjectDetailsController'
      templateUrl : 'views/project-details.html'
      controllerAs: 'vm'
      resolve:
        copilotWork: ['$stateParams', 'ProjectDetailsService', initializeCopilotWork]

    states['project-details.challenges'] =
      url        : '/challengeEstimates'
      templateUrl: 'views/challenges.html'
      controller : 'ChallengesController as vm'

    states['copilot-messaging'] =
      url        : '/copilot-messaging/:id'
      templateUrl: 'views/copilot-messaging.html'
      controller : 'CopilotMessagingController as vm'

    for key, state of states
      $stateProvider.state key, state

  config.$inject = ['$stateProvider']

  angular.module('ap-copilot-flow.project-details').config config
