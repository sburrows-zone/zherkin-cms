import React from 'react'
import PropTypes from 'prop-types'
import { FeatureTemplate } from '../../templates/feature'

const FeaturePreview = ({ entry, widgetFor }) => {
  return (
    <FeatureTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

FeaturePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturePreview
