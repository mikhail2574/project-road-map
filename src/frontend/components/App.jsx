import { Route, Routes } from 'react-router';
import Layout from './Layout';
import CarWorkingInfo from './CarWorkingInfo/CarWorkingInfo';
import ExampleFetch from './ExampleFetch';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>MAIN PAGE</h1>} />
        <Route path="/papers/*">
          <Route index element={<Layout children={<h2>main!</h2>} />} />
          <Route
            path="car"
            element={<Layout children={<CarWorkingInfo />} />}
          />
        </Route>
      </Routes>
      <ExampleFetch />
    </>
  );
};
