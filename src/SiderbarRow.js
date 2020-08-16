import React from 'react'

import './SiderbarRow.css'


const SiderbarRow = ({title, Icon, selected}) => {
  return (
    <div className={`siderbarRow ${selected && 'selected'}`}>
    <Icon className='siderbarRow__icon'/>

    <p className="siderbarRow__title">{title} </p>
      
    </div>
  )
}

export default SiderbarRow