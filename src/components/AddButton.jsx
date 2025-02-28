import '../styles/add-button.css';

export default function AddButton({ setShowAddGroup }) {

  function onClick() {
    setShowAddGroup(true);
  }

  return (
    <div id="add-button" onClick={onClick}>
      <img id="add" src="../assets/add.svg" alt="" />
    </div>
  );
}