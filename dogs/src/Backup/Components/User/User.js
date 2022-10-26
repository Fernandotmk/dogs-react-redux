import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//import { UserContext } from '../../UserContext';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';
import NotFound from '../NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  //const { data } = React.useContext(UserContext);
  const { data } = useSelector((state) => state.user);
  return (
    <section className='container'>
      <Head title='Minha Conta'></Head>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </section>
  );
};

export default User;
