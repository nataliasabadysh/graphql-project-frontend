// Core
import { loader } from 'graphql.macro';
import { useSubscription } from '@apollo/react-hooks';

// Subscriptions
const subscriptioTask = loader('./gql/subscriptioTask.graphql');

export const useTaskUpdater = () => {
  const { loading, error, data } = useSubscription(subscriptioTask);

  const updateTask = data ? data.id : null;

  return { updateTask };
};
