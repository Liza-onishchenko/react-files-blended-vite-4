import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteToDos } from 'reduxTodo/todosOps';

export const Todo = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteToDos(item.id));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {index + 1}
      </Text>

      <Text>{item.text}</Text>
      <button
        onClick={handleDelete}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
