import { useState } from "react";
import "../styles/add-group.css";

export default function AddGroup({ setShowAddGroup, setGroups }) {

  const [error, setError] = useState("");

  function onClose() {
    setShowAddGroup(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const color = form.querySelector(".selected")?.id;

    if (!name || !color) {
      setError("Both group name and color are required.");
      return;
    }

    if(name.length < 2) {
      setError("Group name must be at least 2 characters long.");
      return;
    }

    const newGroup = {
      id: "group_" + Date.now(),
      name,
      color,
    };

    const groups = localStorage.getItem("groups")
      ? JSON.parse(localStorage.getItem("groups"))
      : [];

    const group = groups.find((group) => group.name.toLowerCase() === name.toLowerCase());

    if (group) {
      setError("Group with this name already exists.");
      return;
    }

    groups.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));
    setGroups(groups);

    onClose();
  }

  function onClick(event) {
    const colourPicker = document.getElementById("colour-picker");
    const selected = colourPicker.querySelector(".selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    event.target.classList.add("selected");
  }

  return (
    <>
      <div id="backdrop" onClick={onClose}></div>
      <dialog open>
        <div>Create New Group</div>
        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="name">Group Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter group name"
              className={error ? "error" : ""}
            />
          </p>
          {error && <div className="error-message">{error}</div>}
          <p style={{ marginTop: "0" }}>
            <label style={{ marginTop: "15px", marginRight: "23px" }}>
              Choose colour
            </label>
            <div id="colour-picker">
              <div
                id="#B38BFA"
                onClick={onClick}
                style={{ backgroundColor: "#B38BFA" }}
              ></div>
              <div
                id="#FF79F2"
                onClick={onClick}
                style={{ backgroundColor: "#FF79F2" }}
              ></div>
              <div
                id="#43E6FC"
                onClick={onClick}
                style={{ backgroundColor: "#43E6FC" }}
              ></div>
              <div
                id="#F19576"
                onClick={onClick}
                style={{ backgroundColor: "#F19576" }}
              ></div>
              <div
                id="#0047FF"
                onClick={onClick}
                style={{ backgroundColor: "#0047FF" }}
              ></div>
              <div
                id="#6691FF"
                onClick={onClick}
                style={{ backgroundColor: "#6691FF" }}
              ></div>
            </div>
          </p>
          <p className="actions">
            <button type="submit">Create</button>
          </p>
        </form>
      </dialog>
    </>
  );
}
