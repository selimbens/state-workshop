import ListItem from './ListItem';

export default function List({ data }) {

  return (
    <ul>
      {data.map((member) => (
        <ListItem member={member} />
      ))}
    </ul>
  );
}
