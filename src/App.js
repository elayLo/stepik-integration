import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import { SearchProvider } from './context/SearchContext';
import axios from 'axios';
import CoursesSearch from './pages/CoursesSearch';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
});
function App() {
  const [questionsResponse, setQuestionsResponse] = useState([])
  const [coursesResponse, setCoursesResponse] = useState([])
  const searchForQuestions = (text) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/search-similar-questions`, { question: text })
      .then(res => {
        setQuestionsResponse(res.data)
        console.log(res.data)
      })
  }
  const markQuestion = (id) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/mark-material-as-answer`, { type: "question", id: id })
      .then(res => {
        console.log(res)
        setQuestionsResponse([])
      })
  }

  const searchForCourses = (text) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/search-course-materials`, { question: text })
      .then(res => {
        console.log(res.data)
        setCoursesResponse(res.data)
      })
  }
  const markCourse = (id) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/mark-material-as-answer`, { type: "courseMaterial", id: id })
      .then(res => {
        console.log(res)
        setCoursesResponse([])
      })
  }
  const modalSubmit = ({text, email, url}) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/ask-question-manual`, { text: text, email: email, url: url })
      .then(res => {
        console.log(res)
      })
  }
  return (
    <SearchProvider value={{
      searchForQuestions: searchForQuestions,
      questionResponse: questionsResponse,
      coursesResponse: coursesResponse,
      markQuestion: markQuestion,
      markCourse: markCourse,
      searchForCourses: searchForCourses,
      modalSubmit: modalSubmit
    }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={CoursesSearch}/>
      </Router>
    </SearchProvider>


  );
}

export default App;
