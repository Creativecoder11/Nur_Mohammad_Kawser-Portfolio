import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import video from './Assets/videoplayback.mp4'
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <div>
        <video className='videoTag min-h-screen h-full' autoPlay loop muted>
              <source src={video} type='video/mp4' />
        </video>
        <Toaster/>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
