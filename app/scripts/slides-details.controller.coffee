'use strict'

SlidesDetailsPageController = ($stateParams) ->
  vm              = this
  vm.workId       = $stateParams.workId
  vm.submissionId = $stateParams.submissionId
  console.log('le params', $stateParams)

  vm

SlidesDetailsPageController.$inject = ['$stateParams']

angular.module('app').controller 'SlidesDetailsPageController', SlidesDetailsPageController
