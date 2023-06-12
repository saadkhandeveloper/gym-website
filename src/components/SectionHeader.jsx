import React from 'react'

const SectionHeader = ({Icon, title, className}) => {
  return (
    <div className={`section__head ${className}`}>
        <span>{Icon}</span>
            <h2>{title}</h2>
            </div>
  )
}

export default SectionHeader
 