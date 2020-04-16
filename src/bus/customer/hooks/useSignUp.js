

// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationCreatedCustomer = loader('./gql/mutationCreatedCustomer.graphql');

export const useSignUp = () => {
  const [_save, { data }, error] = useMutation(mutationCreatedCustomer);

  const saveCustomer = (values) => {
    console.log('values', values);

    _save({
      variables: {
        customer: values
      }
    })
  };

  return {
    saveCustomer, createdCustomer: data && data.createdCustomer, error
  }
};
