import GroupSelect from "./GroupSelect.jsx";
import { useEffect, useState } from "react";
import NotesHome from "./NotesHome.jsx";
import "../styles/home.css";
import AddGroup from "../components/AddGroup.jsx";
import Notes from "./Notes.jsx";

export default function Home() {
  const [showAddGroup, setShowAddGroup] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    setGroups(
      localStorage.getItem("groups")
        ? JSON.parse(localStorage.getItem("groups"))
        : []
    );
  }, []);

  return (
    <>
      <div id="home">
        {showAddGroup && (
          <AddGroup setShowAddGroup={setShowAddGroup} setGroups={setGroups} />
        )}

        {selectedGroup ? (
          <div id="notes" className="mobile-only">
            <Notes group={selectedGroup} setSelectedGroup={setSelectedGroup} />
          </div>
        ) : (
          <div id="group-select" className="mobile-only">
            <GroupSelect
              setShowAddGroup={setShowAddGroup}
              groups={groups}
              setSelectedGroup={setSelectedGroup}
            />
          </div>
        )}

        <div id="group-select" className="desktop-only">
          <GroupSelect
            setShowAddGroup={setShowAddGroup}
            groups={groups}
            setSelectedGroup={setSelectedGroup}
          />
        </div>
        <div id="notes" className="desktop-only">
          {selectedGroup ? <Notes group={selectedGroup} /> : <NotesHome />}
        </div>
      </div>
    </>
  );
}
