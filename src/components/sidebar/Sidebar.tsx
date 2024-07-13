import React, { useEffect } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Settings } from "@mui/icons-material";
import { auth, db } from "../../firebase";
import { useApppSelector } from "../../app/hook";
import { QuerySnapshot, collection, onSnapshot, query } from "firebase/firestore";

const Sidebar = () => {
  const user = useApppSelector((state) => state.user);

  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (QuerySnapshot) => {
      const channelsResult = [];
      QuerySnapshot.docs.forEach((doc) => console.log(doc, "aaaaaaaaa"));
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discode</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
              <AddIcon className="sidebarAddIcon" />
            </div>

            <div className="sidebarChannelList">
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
            </div>

            <div className="sidebarFooter">
              <div className="sidebarAccount">
                <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>

              <div className="sidebarVoice">
                <MicIcon />
                <HeadsetMicIcon />
                <Settings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
