import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectToDos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const toDos = useSelector(selectToDos);
  return (
    <>
      <Grid>
        {toDos.map((toDo, index) => (
          <GridItem key={toDo.id}>
            <Todo item={toDo} index={index} />
          </GridItem>
        ))}
      </Grid>
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
    </>
  );
};
