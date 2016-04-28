'use strict'

React                  = require 'react'
ManageStepsView        = require './ManageStepsView'
{ connect }            = require 'react-redux'
{ loadStepsByProject } = require '../../../store/actions/stepsByProject.js'

ManageSteps = React.createClass
  propTypes:
    projectId: React.PropTypes.string.isRequired
    permissions: React.PropTypes.array

  componentWillMount: ->
    { loadStepsByProject, projectId } = this.props

    loadStepsByProject projectId

  render: ->
    { projectId, stepsByProject, permissions } = this.props

    props =
      projectId: projectId
      stepIds: stepsByProject?.items || []
      fetching: stepsByProject?.isFetching
      permissions: permissions || ['CREATE', 'UPDATE', 'DELETE']

    React.createElement ManageStepsView, props

mapStateToProps = (state, ownProps) ->
  id = ownProps.projectId

  projectId: id
  stepsByProject: state.stepsByProject[id]

actionsToBind = {
  loadStepsByProject
}

module.exports = connect(mapStateToProps, actionsToBind)(ManageSteps)
