import './list.scss';

const List = (props) => {
  return (
    props.list.map((item, index) => {
      return (
        <div key={`${item.id}-${index}`} data-testid={`element-${index}`}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      )
    })
  );
}

export default List;
