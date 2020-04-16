
// remove task 

// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const mutationRemoveTasks = loader('./gql/mutationRemoveTasks.graphql');

export const useTasksCleaner = () => {
  const {data , loading, refetch } = useMutation(mutationRemoveTasks);

  const tasks = data ? data.tasks : null;
  // ***  error or refetch ? 
  return { tasks, loading, refetch};
}
