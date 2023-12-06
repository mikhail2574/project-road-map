import { Route, Routes } from 'react-router';
import Layout from './Layout';
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
          element={<Icon name="trash" size={100} color="green" />}
        />
        <Route path="/papers/*">
          <Route index element={<Layout children={<h2>main!</h2>} />} />
          <Route
            path="car"
            element={<Layout children={<CarWorkingInfo />} />}
          />
        </Route>
      </Routes>
      <Directory />
    </>
  );
};
