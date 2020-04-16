// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const gueryGetCustomer = loader('./gql/gueryGetCustomer.graphql');

export const useProfile = () => {
  const [{loading, error, data }] = useLazyQuery(gueryGetCustomer);

  const authenticatedCustomer = data ? data : null;

  return { authenticatedCustomer }
};
  