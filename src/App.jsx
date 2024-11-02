import { Section, Container, Header, Text, TodoList, Form } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectToDos } from 'reduxTodo/todoSlice';
import { fetchToDos } from 'reduxTodo/todosOps';

export const App = () => {
  const toDos = useSelector(selectToDos);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {!isLoading && toDos.length === 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
          {toDos.length > 0 && <TodoList />}
          {/* // {toDos.length > 0 ? (
          //   <TodoList />
          // ) : (
          //   <Text textAlign="center">Create your first todo😉</Text>
          // )} */}
        </Container>
      </Section>
    </>
  );
};
