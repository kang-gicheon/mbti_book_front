import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import {Helmet} from 'react-helmet-async';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import Resultdetail from './pages/ResultDetail';
import styled, { createGlobalStyle } from "styled-components";
import Chat from './pages/Chat';


const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }

  body {
    background: linear-gradient(to bottom, #F9E090, #FF935C);
    height: 100%;
    margin: 0;
    color: #555;
  }
  `;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  height: 600px;
  padding: ${({ padding }) => padding};
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 20%;


`;

export const StyledBtn = styled.button`
  display: block;
  font-family: "Jua";
  background-color: #ff935c;
  color: #fff;
  font-size: 0.85rem;
  border: 0;
  border-radius: 5px;
  height: 55px;
  min-width: 85%;
  margin: 20px auto;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
`;


const App = () => {
  return (
  <>

    <Helmet>
      <title>MBTI</title>
    </Helmet>


    <Routes>

      <Route path="/Home" element={<Home />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path='/Resultdetail' element={<Resultdetail/>}/>

      <Route path="/:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>

    </Routes>


  </>
  );
};
export default App;
