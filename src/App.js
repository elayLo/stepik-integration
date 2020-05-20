import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import { SearchProvider } from './context/SearchContext';
import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
});
function App() {
  const [questionsResponse, setQuestionsResponse] = useState([])
  const searchForQuestions = (text) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/search-similar-questions`, { question: text })
      .then(res => {
        console.log(res.data)
        setQuestionsResponse(res.data)
      })
  }
  const markQuestion = (id) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/mark-material-as-answer`, { type: "question", id: id })
      .then(res => {
        console.log(res)
        setQuestionsResponse([])
      })
  }
  return (
    <SearchProvider value={{
      searchForQuestions: searchForQuestions,
      questionResponse: questionsResponse,
      markQuestion: markQuestion
    }}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </SearchProvider>


  );
}

export default App;
