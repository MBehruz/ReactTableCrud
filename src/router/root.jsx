import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tutorial from '../Crud/Tutorial';
import AddTutorial from '../Crud/AddTutorial';

export default () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Tutorial />} />
        <Route path='/add' element={<AddTutorial />} />
      </Routes>
    </div>
  );
};
