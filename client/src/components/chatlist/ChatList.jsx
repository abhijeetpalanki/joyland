import { Link } from "react-router-dom";
import "./ChatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a New Chat</Link>
      <Link to="/">Explore</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="texts">
          <span>Upgrade to Joyland Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
