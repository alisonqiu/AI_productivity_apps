import React, { useState } from 'react';
import '../styles/Proofreader.css';

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-s79fRl6cEAMYd5fN7MDOcJhc',
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Proofreader = () => {
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await openai.grammarCheck({
        engine: 'text-davinci-002',
        text,
      });
      setErrors(response.data.warnings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="proofreader">
      <h1 className="title">Proofreader</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </label>
        <button type="submit">Check Grammar</button>
      </form>
      {errors.length > 0 && (
        <>
          <h2 className="errors">Errors:</h2>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Proofreader;
