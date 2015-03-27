/*global form:true */
(function () {
  'use strict';

  angular
    .module('app.submit-work')
    .controller('SubmitTypeController', SubmitTypeController);

  SubmitTypeController.$inject = ['logger', 'SubmitWorkService', '$state'];
  /* @ngInject */
  function SubmitTypeController(logger, SubmitWorkService, $state) {
    var vm = this;
    vm.title = 'Type';
    vm.project = {};
    vm.next = SubmitWorkService.next('about-brief');

    activate();

    function activate() {
      logger.info('Activated Type View');
      vm.project = SubmitWorkService.getCurrent();
    }

  }
})();
