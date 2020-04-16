// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryTasks = loader('./gql/queryTasks.graphql');

export const useTasksLoader = () => {
  const { loading, refetch, data } = useQuery(queryTasks);

  const tasks = data ? data.tasks : null;
  // ***  error or refetch ? 
  return { tasks, loading, refetch};
}
