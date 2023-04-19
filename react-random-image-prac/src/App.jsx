import axios from 'axios';
import { useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import Gallery from './components/Gallery';

export default function App() {
  const [images, setImages] = useState([]);

  const getRandomImages = async () => {
    const res = await axios({
      url: 'https://picsum.photos/v2/list',
      method: 'GET'
    });
    setImages(res.data);
  };

  useEffect(() => {
    getRandomImages();
  }, []);

  return (
    <>
      <AppHeader />
      <Gallery images={images} />
    </>
  );
}
