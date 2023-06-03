import React, { useEffect, useState } from 'react'
// import ChatFeed from '../ChatFeed/ChatFeed'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')
let password = localStorage.getItem("password");
let email = localStorage.getItem("email");
console.log(password);
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}
  return (
    <div>
        <ChatEngine
        height="100vh"
        projectID="c5a9d876-10fd-4015-9c6d-4c43a98aca13"
        userName={email}
        userSecret={password}
        renderNewChatForm={(creds) => renderChatForm(creds)}
       />
       
    </div>
  )
}

export default DirectChatPage;