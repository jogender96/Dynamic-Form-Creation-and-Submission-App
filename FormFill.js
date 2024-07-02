import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormFill() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/forms/${id}`)
      .then(response => setForm(response.data));
  }, [id]);

  const handleChange = (questionId, value) => {
    setResponses({
      ...responses,
      [questionId]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/forms/submit', {
      formId: id,
      answers: Object.keys(responses).map(questionId => ({
        questionId,
        selectedOptions: responses[questionId]
      }))
    }).then(response => {
      console.log(response.data);
    });
  };

  if (!form) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h1>{form.title}</h1>
      {form.questions.map(question => (
        <div key={question._id}>
          <label>{question.questionText}</label>
          {question.questionType === 'single' ? (
            <select onChange={e => handleChange(question._id, e.target.value)}>
              {question.options.map(option => (
                <option key={option._id} value={option.text}>{option.text}</option>
              ))}
            </select>
          ) : (
            question.options.map(option => (
              <div key={option._id}>
                <input
                  type="checkbox"
                  value={option.text}
                  onChange={e => {
                    const values = responses[question._id] || [];
                    if (e.target.checked) {
                      values.push(e.target.value);
                    } else {
                      const index = values.indexOf(e.target.value);
                      if (index > -1) {
                        values.splice(index, 1);
                      }
                    }
                    handleChange(question._id, values);
                  }}
                />
                <label>{option.text}</label>
              </div>
            ))
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormFill;
