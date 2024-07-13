import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import { AddCircleOutline, CardGiftcard, CardGiftcardOutlined, EmojiEmotions, Gif } from '@mui/icons-material'
import ChatMessage from './ChatMessage'
const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className="chatMessage">
        <ChatMessage />
      </div>
      <div className="chatInput">
        <AddCircleOutline />
        <form action="">
          <input type="text" placeholder='メッセージ' />
          <button type='submit' className='chatInputbutton'>
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  )
}

export default Chat
