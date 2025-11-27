import React from 'react';
import { useApp } from '../context/AppContext';

export default function FeedbackForm() {
  const { feedback, setFeedback, setShowForm } = useApp();

  const submitForm = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.email && feedback.message) {
      alert('Feedback submitted!');
      setFeedback({ name:'', email:'', message:'' });
      setShowForm(false);
    } else {
      alert('All fields are required');
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <input placeholder="Name" value={feedback.name} onChange={e => setFeedback({ ...feedback, name:e.target.value })} />
        <input placeholder="Email" value={feedback.email} onChange={e => setFeedback({ ...feedback, email:e.target.value })} />
        <textarea placeholder="Message" value={feedback.message} onChange={e => setFeedback({ ...feedback, message:e.target.value })}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}