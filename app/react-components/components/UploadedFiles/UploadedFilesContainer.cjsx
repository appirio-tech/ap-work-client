'use strict'

React         = require 'react'
{ connect }   = require 'react-redux'
classnames    = require 'classnames'
UploadedFiles = require './UploadedFiles'

{ deleteAttachment } = require '../../../store/actions/deleteAttachment.js'
{ getAttachments }   = require '../../../store/actions/getAttachments.js'

{ createClass, createElement, PropTypes } = React

mapStateToProps = (state) ->
  { id, assetType, category, enableCaptions } = state?.fileUploader

  filterAttachments = (attachments) ->
    filteredFiles = []

    for key, attachment of attachments
      if id == attachment.id
        if assetType == attachment.assetType
          if category == attachment.category
            filteredFiles.push attachment

    filteredFiles

  files = filterAttachments(state?.attachments)

  { id, assetType, category, files }

container =
  propTypes:
    id            : PropTypes.string.isRequired
    assetType     : PropTypes.string.isRequired
    category      : PropTypes.string.isRequired
    dispatch      : PropTypes.func.isRequired
    files         : PropTypes.array.isRequired
    enableCaptions: PropTypes.bool
    disabled      : PropTypes.bool

  onDelete: (file) ->
    this.props.dispatch deleteAttachment file

  componentWillMount: ->
    { dispatch, id, assetType, category } = this.props

    dispatch getAttachments { id, assetType, category }

  render: ->
    { files, enableCaptions, disabled } = this.props

    createElement UploadedFiles,
      files         : files
      onDelete      : this.onDelete
      enableCaptions: enableCaptions
      disabled      : disabled

module.exports = connect(mapStateToProps)(createClass(container))

