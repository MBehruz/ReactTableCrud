import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import TutorialService from '../services/TutorialService';
const AddTutorial = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state && state.id) {
      TutorialService.edit(`${state.id}`, formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      TutorialService.create(formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
    });
    navigate('/');
  };

  useEffect(() => {
    if (state) {
      TutorialService.getOne(`${state.id}`)
        .then((res) => {
          const { first_name, last_name, email, gender } = res.data;
          setFormData({ first_name, last_name, email, gender });
        })
        .catch((err) => console.log(err));
    }
  }, [state]);

  return (
    <div className='containerAdd'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          id='first_name'
          name='first_name'
          onChange={handleChange}
          value={formData.first_name}
        />
        <input
          type='text'
          placeholder='Last Name'
          id='last_name'
          name='last_name'
          onChange={handleChange}
          value={formData.last_name}
        />
        <input
          type='text'
          placeholder='E-mail'
          id='email'
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <select
          type='text'
          placeholder='Gender'
          id='gender'
          name='gender'
          onChange={handleChange}
          value={formData.gender}
        >
          <option value=''>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>

        <div className='btn '>
          <button
            style={{ backgroundColor: 'red' }}
            onClick={() => navigate('/')}
          >
            Back
          </button>
          <button type='submit'>{state ? 'Update' : 'Add'}</button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
