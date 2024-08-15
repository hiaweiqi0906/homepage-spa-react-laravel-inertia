import React from 'react'
import './index.css'
import { HomeIcon, DocumentIcon, IdeaIcon, PrivacyIcon, SettingIcon } from '@images'

export default function Sidebar(props) {
  return (
    <div className="sidenav">
      <ul>
        <li className='profile-item'><img className="profile-pic" src={props.profile_picture_url || ""} /></li>
        <li><img src={HomeIcon} /></li>
        <li><img src={DocumentIcon} /></li>
        <li><img src={IdeaIcon} /></li>
        <li><img src={PrivacyIcon} /></li>
        <li><img src={SettingIcon} /></li>
      </ul>
    </div>
  )
}
