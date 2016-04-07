'use strict'

transform = require('./transform.js').default

transformIdOnlyResponse = (response) ->
  parsed = transform(response)

  id: parsed

srv = ($resource, API_URL) ->
  url = API_URL + '/v3/projects/copilot/unclaimed'

  params = {}

  methods =
    put:
      method           :'PUT'
      transformResponse: transformIdOnlyResponse

    post:
      method           :'POST'
      transformResponse: transformIdOnlyResponse

    get:
      transformResponse: transform

    query:
      isArray: true
      transformResponse: transform

  $resource url, params, methods

srv.$inject = ['$resource', 'API_URL']

angular.module('appirio-tech-ng-api-services').factory 'CopilotUnclaimedProjectsAPIService', srv