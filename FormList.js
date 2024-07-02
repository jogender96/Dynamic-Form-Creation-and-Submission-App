import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForms } from '../store/formSlice';
import { Link } from 'react-router-dom';

function FormList() {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);

  useEffect(() => {
    dispatch(fetchForms());
  }, [dispatch]);

  return (
    <div>
      <h1>Forms</h1>
      <ul>
        {forms.map((form) => (
          <li key={form._id}>
            <Link to={`/forms/${form._id}`}>{form.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
