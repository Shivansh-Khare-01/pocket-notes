import "../styles/note.css";

export default function Note({ note }) {
  function getDate() {
    const date = new Date(note.dateTime);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function getTime() {
    const date = new Date(note.dateTime);
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    if (hours < 10) hours = "0" + hours;
    if (hours > 12) hours -= 12;
    const minutes = date.getMinutes();
    return `${hours}:${minutes} ${ampm}`;
  }

  return (
    <div id="note">
      <p id="content">{note.content}</p>
      <p id="date-time">
        <span>{getDate()}</span>
        <img src="../assets/ellipse.svg" alt="ellipse dot" />
        <span>{getTime()}</span>
      </p>
    </div>
  );
}
