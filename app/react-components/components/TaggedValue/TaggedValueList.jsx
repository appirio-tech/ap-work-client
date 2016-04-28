import React from 'react'
import TaggedValue from './TaggedValue'
import classNames from 'classnames'

require('./TaggedValueList.scss')

const TaggedValueList = ({items, layout}) => {
  const itemClass = classNames(
    items,
    {'items-scroll' : layout === 'scroll'}
  )
  return (
    <div className="TaggedValueList">
      <div className={itemClass}>
        {items.map((item, index) => {
          return <TaggedValue title={item.title} subText={item.subText} style={item.style} count={item.count} key={index}/>
        })}
      </div>
    </div>
  )
}

TaggedValueList.propTypes = {
  items :  React.PropTypes.array,
  layout : React.PropTypes.oneOf(['scroll', 'wrap'])
}

export default TaggedValueList
