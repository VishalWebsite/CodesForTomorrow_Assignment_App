import React from 'react';
import { useApp } from './context/AppContext';
import Card from './components/Card';
import FeedbackForm from './components/FeedbackForm';

export default function Main() {
  const { posts, loading, page, setPage, viewToggle, setViewToggle, showForm, setShowForm } = useApp();

  const PER_PAGE = 6;
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleCards = posts.slice(start, start + PER_PAGE);

  return (
    <div className="container">
      <h1>Hi Reader,</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="topBar">
            <button onClick={() => setViewToggle(!viewToggle)}>View Toggle</button>
            <button onClick={() => setShowForm(true)}>We Are Listening</button>
          </div>

          <div className="cardContainer">
            {visibleCards.map(item => <Card key={item.id} item={item} />)}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>{i + 1}</button>
            ))}
          </div>
        </>
      )}

      {showForm && <FeedbackForm />}
    </div>
  );
}