import React, { useState } from "react";
import '../styles/Chat.css';

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-s79fRl6cEAMYd5fN7MDOcJhc",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (input === "") return;

    // Add user message to chatbox
    setMessages((prevMessages) => [...prevMessages, { text: input, isUser: true }]);
    setInput("");

    // Send message to backend API
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        stop: ["You:"],
      });

    const data = await response.json();
    console.log(data);

    // Add bot response to chatbox
    setMessages((prevMessages) => [...prevMessages, { text: data.output, isUser: false }]);
  }

  return (
    <div className="container">
      <h1 className='title'> Chatbot</h1>
      <div className="chatbox">
        {messages.map((message, index) => (
          <p key={index} className={message.isUser ? "user-message" : "bot-message"}>
            {message.text}
          </p>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;