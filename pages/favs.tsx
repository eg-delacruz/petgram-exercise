import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';

//Styles
import { Description } from '@styles/pages/FavsStyles';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';
import PhotoCard from '@components/PhotoCard/PhotoCard';

//Hooks
import useLocalStorage from '@hooks/useLocalStorage';

//Types
type Photo = {
  id: string;
  likes: number;
  liked: boolean;
  src: string;
};

//TODO: protect route
//TODO: Add a message when there are no photosthe content
const Favs = () => {
  const [mounted, setMounted] = useState(false);
  const [storedPhotoIds] = useLocalStorage('photos', []);
  const [photoData, setPhotoData] = useState<Photo[]>([]);

  const context = useContext(Context);
  const isAuth = context ? context.isAuth : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  //Get liked photos from localStorage
  useEffect(() => {
    if (!mounted) return;
    if (typeof window !== 'undefined') {
      //For each photo id, get that photo from the localStorage
      const photos = storedPhotoIds.map((id: string) => {
        const item = localStorage.getItem(id);
        if (item) {
          return JSON.parse(item);
        }
      });
      setPhotoData(photos);
    }
  }, [storedPhotoIds, mounted]);

  return (
    <SEO_Layout
      title='Tus favoritos | Petgram'
      metaName='Petgram'
      metaDescription='Aquí puedes encontrar tus favoritos'
    >
      <Layout>
        <h1>Tus Favoritos</h1>
        <Description>Aquí puedes encontrar tus favoritos</Description>
        <ul>
          {photoData.map((photo: Photo) => (
            <>{photo.liked ? <PhotoCard key={photo.id} {...photo} /> : null}</>
          ))}
        </ul>
      </Layout>
    </SEO_Layout>
  );
};

export default Favs;
