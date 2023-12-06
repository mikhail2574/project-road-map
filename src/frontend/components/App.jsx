import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import CarWorkingInfo from './CarWorkingInfo/CarWorkingInfo';
import Directory from './Directory/Directory';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Directory />} />
          <Route path="papers" element={<CarWorkingInfo />}>
            <Route path="general" element={<h2>main!</h2>} />
            <Route path="car" element={<CarWorkingInfo />} />
          </Route>
        </Route>
      </Routes>
      <Directory />
    </>
  );
};
