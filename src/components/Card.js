import React from 'react';
import { useApp } from '../context/AppContext';

export default function Card({ item }) {
  const { posts, setPosts, viewToggle } = useApp();

  const removeCard = (id) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
  };

  return (
    <div className={viewToggle ? 'card listView' : 'card'}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <button className="removeBtn" onClick={() => removeCard(item.id)}>X</button>
    </div>
  );
}