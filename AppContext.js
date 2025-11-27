import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [viewToggle, setViewToggle] = useState(false);
  const [feedback, setFeedback] = useState({ name:'', email:'', message:'' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .finally(() => setLoading(false));
    }, 5000);
  }, []);

  return (
    <AppContext.Provider value={{
      posts, setPosts, loading, page, setPage,
      viewToggle, setViewToggle,
      feedback, setFeedback,
      showForm, setShowForm
    }}>
      {children}
    </AppContext.Provider>
  );
};