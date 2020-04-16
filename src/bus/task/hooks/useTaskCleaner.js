
// remove task 

// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const mutationRemoveTask = loader('./gql/mutationRemoveTask.graphql');

export const useTaskCleaner = () => {
  const { loading, refetch, data } = useQuery(mutationRemoveTask);

  const tasks = data ? data.tasks : null;
  // ***  error or refetch ? 
  return { tasks, loading, refetch};
}
