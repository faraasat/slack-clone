import { FC } from "react";
import "./Messages.css";

interface IMessages {
  message: any;
  timestamp: any;
  user: string;
  userImg: string;
}

const Messages: FC<IMessages> = ({ message, timestamp, user, userImg }) => {
  return (
    <div className="message">
      <img src={userImg} alt={user} />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
