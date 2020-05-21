import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home'
import { SearchProvider } from './context/SearchContext';
import axios from 'axios';
import CoursesSearch from './pages/CoursesSearch';
import RedirectPage from './pages/Redirect'
import Login from './pages/Login';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
});
function App() {
  const [questionsResponse, setQuestionsResponse] = useState([])
  const [coursesResponse, setCoursesResponse] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const searchForQuestions = (text) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/search-similar-questions`, { question: text })
      .then(res => {
        setQuestionsResponse(res.data)
        console.log(res.data)
      })
  }
  const goToAuth = () => {
    setLoggedIn(true)
  }
  const markQuestion = (id) => {
    axios.post(`https://bsc-sergeenkov.rc.robotbull.com/api/mark-material-as-answer`, { type: "question", id: id })
      .then(res => {
        console.log(res)
        setQuestionsResponse([])
      })
    alert('Вы нашли ответ')
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
  const modalSubmit = ({ text, email, url }) => {
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
      modalSubmit: modalSubmit,
      loggedIn: loggedIn,
      goToAuth: goToAuth,
    }}>

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={CoursesSearch} />
        <Route path='/redirect:code' render={(props) => <RedirectPage {...props}/>}  />
        <Route path='/stepik' component={() => window.location = 'https://stepik.org/oauth2/authorize/?response_type=code&client_id=G7FYKRNVUPlQKT8HmNvfbyysVUiRBnaFCSDcmBA9&redirect_uri=http://localhost:3000/redirect'} />
      </Router>


    </SearchProvider>


  );
}

export default App;
