import React, { useState, useEffect, useRef } from 'react';
import styles from '../../css/roboguide.module.css';

const RoboGuideWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatWindowRef = useRef(null);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    const API_URL = 'http://localhost:8000/api/query';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userInput }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: data.answer },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: `Error: ${data.error || 'Could not get a response from the AI.'}` },
        ]);
      }
    } catch (error) {
      console.error('RoboGuide AI Backend error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: 'Error: Failed to connect to the RoboGuide AI backend.' },
      ]);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window on new messages
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  return (
    <>
      <button className={styles.chatButton} onClick={toggleWidget}>
        RoboGuide AI
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            RoboGuide AI
            <button className={styles.closeButton} onClick={toggleWidget}>
              &times;
            </button>
          </div>
          <div className={styles.chatBody} ref={chatWindowRef}>
            {messages.length === 0 ? (
              <div className={styles.welcomeMessage}>
                Hello! I'm RoboGuide AI, your expert on Humanoid Robotics. Ask me anything!
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`${styles.chatMessage} ${styles[msg.sender]}`}>
                  {msg.text}
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me about humanoid robotics..."
              className={styles.chatInput}
            />
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default RoboGuideWidget;
