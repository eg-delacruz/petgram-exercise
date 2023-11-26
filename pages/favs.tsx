import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//Styles
import {
  Description,
  FavsGrid,
  FavImgContainer,
  FavImg,
  NoFavsContainer,
} from '@styles/pages/FavsStyles';

//Assets
import Dog from '@assets/Dog.svg';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';

//Hooks
import useLocalStorage from '@hooks/useLocalStorage';

//Types
type Photo = {
  id: string;
  likes: number;
  liked: boolean;
  src: string;
};

const Favs = () => {
  const [mounted, setMounted] = useState(false);
  const [storedPhotoIds] = useLocalStorage('photos', []);
  const [photoData, setPhotoData] = useState<Photo[]>([]);

  const context = useContext(Context);
  const router = useRouter();
  const isAuth = context ? context.isAuth : null;

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth, router]);

  //Prevent to use window object in SSR
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

  const noFavs = () => {
    const likedPhotos = photoData.filter((photo: Photo) => photo.liked);
    if (likedPhotos.length <= 0) {
      return (
        <NoFavsContainer>
          <h3>No tienes favoritos</h3>
          <Image width={220} src={Dog} alt='Perro' />
          <p>Ve y marca tus favoritos</p>
        </NoFavsContainer>
      );
    }
  };

  return (
    <SEO_Layout
      title='Tus favoritos | Petgram'
      metaName='Petgram'
      metaDescription='Aquí puedes encontrar tus favoritos'
    >
      <Layout>
        <h1>Tus Favoritos</h1>
        <Description>Aquí puedes encontrar tus favoritos</Description>
        {noFavs()}
        <FavsGrid>
          {photoData.map((photo: Photo) => (
            <>
              {photo.liked ? (
                <Link href={`/detail/${photo.id}`} key={photo.id}>
                  <FavImgContainer>
                    <FavImg src={photo.src} alt='Imagen de mascota favorita' />
                  </FavImgContainer>
                </Link>
              ) : null}
            </>
          ))}
        </FavsGrid>
      </Layout>
    </SEO_Layout>
  );
};

export default Favs;
