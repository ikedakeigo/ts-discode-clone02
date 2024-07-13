import React from 'react'
import './ChatMessage.scss'
import { Avatar } from '@mui/material'

const ChatMessage = () => {
  return (
    <div className='message'>
      <Avatar />
      <div className="messageInfo">
        <h4>
          user name
          <span className='messageTimestamp'>
            timestamp
          </span>
        </h4>

        <p>本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
