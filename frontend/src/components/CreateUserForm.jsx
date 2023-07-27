import React, { useState } from 'react';
import { createUser, getUsers } from '../api';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreateUserForm = () => {
  const [userExists, setUserExists] = useState(false); // State to track if user already exists
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required.'),
      email: Yup.string().email('Invalid email address.').required('Email is required.'),
      age: Yup.number().required('Age is required.').positive('Age must be a positive number.'),
    }),
    onSubmit: async (values) => {
      try {
        const userExists = await checkUserExists(values.email);
        if (userExists) {
          setUserExists(true);
        } else {
          await createUser(values);
          formik.resetForm();
          navigate('/');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
  });

  const checkUserExists = async (email) => {
    try {
      const response = await getUsers();
      const users = response.data;
      const existingUser = users.find((user) => user.email === email.trim());
      return !!existingUser;
    } catch (error) {
      console.error('Error fetching users:', error);
      return false;
    }
  };

  return (
    <div className="create-user main">
      <div className="container">
        <h2>Create User</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name && <p className="text-danger">{formik.errors.name}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && <p className="text-danger">{formik.errors.email}</p>}
            {userExists && <p className="text-danger">User with this email already exists.</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
            {formik.touched.age && formik.errors.age && <p className="text-danger">{formik.errors.age}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
