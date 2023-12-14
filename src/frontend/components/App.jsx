import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import CarWorkingInfo from './CarWorkingInfo/CarWorkingInfo';
import Directory from './Directory/Directory';
import { Icon } from './Icon';
import { Icons } from './Icons';

export const App = () => {
  return (
    <>
      <Icons />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout />
              <Icon name="trash" size={100} color="green" />
            </>
          }
        >
          <Route index element={<Directory />} />
          <Route path="papers" element={<CarWorkingInfo />}>
            <Route path="general" element={<h2>main!</h2>} />
            <Route path="car" element={<CarWorkingInfo />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};



export default App;
