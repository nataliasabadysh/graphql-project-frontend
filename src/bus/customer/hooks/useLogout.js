// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationLogOut = loader('./gql/mutationLogOut.graphql');

export const useLogout = () => {
  const [{ data }, error] = useMutation(mutationLogOut);

  const logout = () => {
    console.log('out')
  }

  return { logout }
};
