import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import VideoSubmit from './VideoSubmit';
import Video from './Video';
import VideoPost from './VideoPost';
import Home from './Home';
import Search from './Search';
import Login from './Login';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/submit' element={<VideoSubmit />} />
      <Route path='/videos/post' element={<Video />} />
      <Route path='/videos/:id' element={<VideoPost />} />
      <Route path='/search' element={<Search />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
