import React from 'react';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Posts from './components/Posts';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">{/* <Posts /> */}</div>
    </QueryClientProvider>
  );
}

export default App;
