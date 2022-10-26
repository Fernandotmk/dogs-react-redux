import React from 'react';
//import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  //const { login } = React.useContext(UserContext);
  const {data} = useSelector(state => state.user)
  return data ? children : <Navigate to='/login' />;
};
 
export default ProtectedRoute;
