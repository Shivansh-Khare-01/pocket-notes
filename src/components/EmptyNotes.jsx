import '../styles/empty-notes.css';

export default function EmptyNotes() {
  return (
    <div id="empty-notes">
      <img
        src="assets/empty-notes.svg"
        alt="no notes in group"
      />
      <div id="main-text">Pocket Notes</div>
      <p>Send and receive messages without keeping your phone online. <br />
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
  );
}
