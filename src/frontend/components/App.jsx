import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import CarWorkingInfo from './CarWorkingInfo/CarWorkingInfo';
import Directory from './Directory/Directory';
import { Icons } from './Icons';
import CarGeneralInformation from './CarGeneralInformation/CarGeneralInformation';
import { Navigate } from 'react-router-dom';

export const App = () => {
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
