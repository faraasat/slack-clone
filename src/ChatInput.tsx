import { useState } from "react";
import { FC } from "react";
import "./ChatInput.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

interface IChatInput {
  channelName: string;
  channelId: string;
}

const ChatInput: FC<IChatInput> = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }]: any = useStateValue();

  const sendMessage = (e: any) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        msg: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImg: user?.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
