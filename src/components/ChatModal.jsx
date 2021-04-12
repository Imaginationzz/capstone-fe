import React, { useState } from "react";
import { Modal, InputGroup, FormControl, Button } from "react-bootstrap";

import { useSelector } from "react-redux";

export default function ChatModal({
  showModal,
  toggleModal,
  connectedUsers,
  messages,
  sendMessage,
  message,
  handleMessage,
}) {
  const userInfo = useSelector((state) => state.userState.userInfo);
  return (
    <div>
      <Modal
        size="small"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={toggleModal}
        className="chat-Modal"
      >
        <Modal.Header>
          <Modal.Title style={{ color: "white", fontSize: "large" }}>
            <strong> Chat With Us</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="messages" style={{ listStyle: "none", padding: "0.rem" }}>
            {connectedUsers.map((user, i) => (
              <li key={i}>
                <strong>{user.username}</strong>
              </li>
            ))}
          </ul>
          <hr></hr>
          <ul id="messages" style={{ listStyle: "none", padding: "0.rem" }}>
            {messages.map((msg, i) => (
              <li
                key={i}
                className={
                  msg.user === userInfo.userName ? "ownMessage" : "message"
                }
              >
                <strong>{msg.sender}</strong>
                {msg.text}-{msg.createdAt}
              </li>
            ))}
          </ul>
          <form id="chat" onSubmit={sendMessage}>
            <input
              autoComplete="off"
              value={message}
              onChange={handleMessage}
              className="rounded-0 border-0"
            />
            <Button type="send" className="btn">
              Send
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-footer" onClick={toggleModal}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
