// import axios from 'axios';
// import { useFormik } from 'formik';
// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const AddTutorial = () => {
//   const { state } = useLocation();

//   const navigate = useNavigate();
//   const formik = useFormik({
//     initialValues: {
//       first_name: '',
//       last_name: '',
//       email: '',
//       gender: '',
//     },
//     onSubmit: (values) => {
//       if (state && state.id) {
//         axios
//           .put(`http://localhost:8080/users/${state.id}`, values)
//           .then((res) => console.log(res.data))
//           .catch((err) => console.log(err));
//         formik.resetForm();
//         navigate('/');
//       } else {
//         axios
//           .post('http://localhost:8080/users', values)
//           .then((res) => console.log(res.data))
//           .catch((err) => console.log(err));
//         formik.resetForm();
//         navigate('/');
//       }
//     },
//   });

//   useEffect(() => {
//     if (state) {
//       axios
//         .get(`http://localhost:8080/users/${state.id}`)
//         .then((res) => {
//           const { first_name, last_name, email, gender } = res.data;
//           formik.setValues({ first_name, last_name, email, gender });
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [state, formik]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           type='text'
//           placeholder='First Name'
//           id='first_name'
//           name='first_name'
//           onChange={formik.handleChange}
//           value={formik.values.first_name}
//         />
//         <input
//           type='text'
//           placeholder='Last Name'
//           id='last_name'
//           name='last_name'
//           onChange={formik.handleChange}
//           value={formik.values.last_name}
//         />
//         <input
//           type='text'
//           placeholder='E-mail'
//           id='email'
//           name='email'
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         <input
//           type='text'
//           placeholder='Gender'
//           id='gender'
//           name='gender'
//           onChange={formik.handleChange}
//           value={formik.values.gender}
//         />
//         <button type='submit'>{state ? 'Update' : 'Add'}</button>
//       </form>
//     </div>
//   );
// };

// export default AddTutorial;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      axios
        .put(`http://localhost:8080/users/${state.id}`, formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .post('http://localhost:8080/users', formData)
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
      axios
        .get(`http://localhost:8080/users/${state.id}`)
        .then((res) => {
          const { first_name, last_name, email, gender } = res.data;
          setFormData({ first_name, last_name, email, gender });
        })
        .catch((err) => console.log(err));
    }
  }, [state]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        <input
          type='text'
          placeholder='Gender'
          id='gender'
          name='gender'
          onChange={handleChange}
          value={formData.gender}
        />
        <button type='submit'>{state ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddTutorial;
