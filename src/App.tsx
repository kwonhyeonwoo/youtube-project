import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import VideoSubmit from './VideoSubmit';
import Video from './Video';
import VideoPost from './VideoPost';

function App() {

  return (
   <Routes>
      <Route path='/submit' element={<VideoSubmit />} />
      <Route path='/videos/post' element={<Video />} />
      <Route path='/videos/:id' element={<VideoPost />} />
   </Routes>
  );
}

export default App;
