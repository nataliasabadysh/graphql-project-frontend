
// remove task 

// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const mutationAddTask = loader('./gql/mutationAddTask.graphql');

export const useTaskCreator = () => {
  const { _save, error } = useMutation(mutationAddTask);

  const createTask = (values) => {
    _save({
        variables: {
         task: values
        }
      })
  }
  // ***  error or refetch ? 
  return { createTask, error };
}