// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationLoginCustomer = loader('./gql//mutationLogIn.graphql');

export const useLogin = () => {
  const [{ data }, error] = useMutation(mutationLoginCustomer);

  const authenticate = data ? data : null;

  return { authenticate, error  }
};
