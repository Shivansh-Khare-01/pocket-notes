import AddButton from "../components/AddButton.jsx";
import GroupItem from "../components/GroupItem.jsx";
import GroupHeader from "../components/GroupHeader.jsx";

export default function GroupSelect({ setShowAddGroup, groups, setSelectedGroup }) {

  return (
    <>
      <div style={{height: '100%', position: 'relative', display: 'flex', flexDirection: 'column'}}>
        <GroupHeader />
        <div style={{overflowY: 'auto'}}>
          {groups.map((group, index) => (
            <div onClick={() => setSelectedGroup(group)} key={index}>
              <GroupItem group={group}/>
            </div>
          ))}
        </div>
        <AddButton setShowAddGroup={setShowAddGroup}/>
      </div>
    </>
  );
}
