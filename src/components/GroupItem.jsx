import '../styles/group-item.css';

export default function GroupItem({ group }) {

  const groupLogo = group.name.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase();

  return (
    <div id="group-item">
      <div id="item-image" style={{backgroundColor: group.color}}>{groupLogo}</div>
      <p>{group.name}</p>
    </div>
  );
}