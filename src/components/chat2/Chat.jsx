import React, { useEffect, useRef, useState } from "react";
// import ChatFeed from '../ChatFeed/ChatFeed'
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useProfile } from "../../contexts/ProfileContextProvider";

const DirectChatPage = () => {
  const { oneEmail } = useProfile();
  const [username, setUsername] = useState(oneEmail);
  let password = localStorage.getItem("password");
  let email = localStorage.getItem("email");
  // let oneEmail = localStorage.getItem("oneEmail");
  console.log(password);

  // const inputRef = useRef(null);

  // const handleCopy = () => {
  //     inputRef.current.select();
  //     document.execCommand('copy');
  //   };

  function createDirectChat(creds) {
    console.log(creds);
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        {/* <div><input  ref={inputRef}
        type="text"
        value={oneEmail}
        readOnly /> <button onClick={handleCopy}>COPY USERNAME</button></div> */}
        <input
          placeholder="Username"
          value={username}
          style={{ display: "none" }}
          // onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Start chat</button>
      </div>
    );
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
  );
};

export default DirectChatPage;
