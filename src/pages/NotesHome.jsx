import '../styles/notes-home.css';
import EmptyNotes from '../components/EmptyNotes';

export default function NotesHome() {
  return (
    <div id='notes-container'>
      <EmptyNotes />
      <div id="notes-footer">
        <img src="assets/lock.svg" alt="lock icon" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
}