import { Section, Container, Header, Text, TodoList, Form } from 'components';
import { useSelector } from 'react-redux';
import { selectToDos } from 'reduxTodo/todoSlice';

export const App = () => {
  const toDos = useSelector(selectToDos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {toDos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
