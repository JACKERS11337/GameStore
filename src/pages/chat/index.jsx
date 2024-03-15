import React, { useCallback, useState, useEffect } from "react";
import "./style.scss";
import { FiMessageCircle } from "react-icons/fi";

export const Chat = () => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(
    localStorage.getItem("messages")
      ? JSON.parse(localStorage.getItem("messages"))
      : []
  );

  function writeMessage(event) {
    setMessage(event.target.value);
  }

  function removeMessage(mes) {
    const isMessage = messages.find((message) => message === mes);
    isMessage ? setMessages(messages.filter((message) => message !== mes)) : "";
  }

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const submitMessage = useCallback(() => {
    if (message) {
      setMessages((prev) => [...prev, message]);
      setMessage("");

      localStorage.setItem(
        "messages",
        JSON.stringify([
          ...(localStorage.getItem("messages")
            ? JSON.parse(localStorage.getItem("messages"))
            : []),
          message,
        ])
      );
    }
  }, [messages, message]);
  console.log(messages);

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-content">
          <div className="chat-text">
            {messages.map((mes, index) => (
              <p onClick={() => removeMessage(mes)} key={mes + index}>
                {mes}
              </p>
            ))}
          </div>
          <div className="chat-placeholder">
            <input
              value={message}
              name="message"
              onChange={writeMessage}
              type="text"
            />
            <button onClick={() => submitMessage()}>
              <span>
                <FiMessageCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
