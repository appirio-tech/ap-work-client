(function () {
  'use strict';

  angular
    .module('app.view-work.manage')
    .run(runApp);

  runApp.$inject = ['routerHelper', '$stateParams', 'data'];
  /* @ngInject */
  function runApp(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'view-work-multiple',
        config: {
          url: '/manage',
          templateUrl: 'view-work/manage/views/manage.html',
          controller: 'ManageController',
          controllerAs: 'vm',
          title: 'View Work',
          settings: {},
          resolve : {
            workRequests : function ($stateParams, data) {
              return data.get('work-request', $stateParams);
            }
          }
        }
      }
    ];
  }
})();

