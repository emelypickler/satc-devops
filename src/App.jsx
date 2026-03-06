import { useState } from "react";
import "./chat.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function enviaMensagem(event) {
    event.preventDefault();

    if (message.trim() === "") return;

    const novaMensagem = {
      from: "user",
      text: message
    };

    setMessages([...messages, novaMensagem]);
    setMessage("");
  }

  return (
    <div id="chat-screen">
      <header>
        <h2>Atendimento on-line</h2>
      </header>

      <div id="chat" className="messages-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-item ${
              msg.from === "user" ? "message-user" : ""
            }`}
          >
            <div className="msg-user">
              <strong>
                {msg.from === "user" ? "Você diz:" : "Atendente diz:"}
              </strong>
            </div>

            <div className="msg-chat">{msg.text}</div>
          </div>
        ))}
      </div>

      <form id="form-chat-send" onSubmit={enviaMensagem}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}