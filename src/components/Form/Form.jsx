import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addToDo } from 'reduxTodo/todosOps';

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.search.value;
    const newTodo = {
      text,
    };
    dispatch(addToDo(newTodo));
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
