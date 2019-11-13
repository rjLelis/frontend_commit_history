import React from 'react';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import CommitList from './components/CommitList';
import './Main.css';

function App() {
  return (
    <div className="padding-10">
      <Header />
      <main>
        <RepositoryList />
        <CommitList />
      </main>
    </div>
  );
}

export default App;
