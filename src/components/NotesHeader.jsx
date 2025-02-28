import "../styles/notes-header.css";

export default function NotesHeader({ group, setSelectedGroup }) {
  const groupLogo = group.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <header id="notes-header">
      <img onClick={() => setSelectedGroup(null)} id="back-button" src="assets/back-arrow.svg" alt="back icon" />
      <div id="item-image" style={{ backgroundColor: group.color }}>
        {groupLogo}
      </div>
      <p>{group.name}</p>
    </header>
  );
}
