import React, { useState } from 'react';
import '../styles/Email.css';

// const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-s79fRl6cEAMYd5fN7MDOcJhc",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Email = () => {
  const [recipient, setRecipient] = useState('');
  const [summary, setSummary] = useState('');
  const [tone, setTone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `Write an email to ${recipient} with the following summary: ${summary}. The tone of the email should be ${tone}.`;
    console.log(prompt);
    try {


      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      setEmail(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='email'>
      <h1 className='title'> Generate a customized email</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Recipient:
          <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </label>
        <label>
          Summary:
          <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
        </label>
        <label>
          Tone:
          <input type="text" value={tone} onChange={(e) => setTone(e.target.value)} />
        </label>
        <button type="submit">Generate Email</button>
      </form>
      <h1 > Generated Result: </h1>
      <div className='generated-email'>{email}</div>
    </div>
  );
};

export default Email;
