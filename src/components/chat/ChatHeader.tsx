import React from 'react'
import './ChatHeader.scss'
import { HelpOutline, Notifications, PeopleAlt, PushPin, Search, SendAndArchive } from '@mui/icons-material'

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          Channel Name
        </h3>
      </div>

      <div className="chatHeaderRight">
        <Notifications />
        <PushPin />
        <PeopleAlt />
        <div className="chatHeaderSearch">
          <input placeholder="Search" />
          <Search />
        </div>
        <SendAndArchive />
        <HelpOutline />
      </div>
    </div>
  )
}

export default ChatHeader
