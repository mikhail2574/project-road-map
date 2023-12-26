import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import CarWorkingInfo from './CarWorkingInfo/CarWorkingInfo';
import Directory from './Directory/Directory';
import { Icons } from './Icons';
import CarGeneralInformation from './CarGeneralInformation/CarGeneralInformation';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInfosThunk } from 'redux/infos/operations';

export const App = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);
  return (
    <>
      <Icons />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Directory />} />
          <Route path="/papers">
            <Route index element={<Navigate to="general" />} />
            <Route path="general" element={<CarGeneralInformation />} />
            <Route path="car" element={<CarWorkingInfo />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
