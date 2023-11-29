import { Route, Routes } from 'react-router';
import Cars from './Cars';
import Layout from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>MAIN PAGE</h1>} />
        <Route path="/papers/*">
          <Route index element={<Layout children={<h2>main!</h2>} />} />
          <Route path="car" element={<Layout children={<h2>car!</h2>} />} />
        </Route>
      </Routes>
      <Cars />
    </>
  );
};
