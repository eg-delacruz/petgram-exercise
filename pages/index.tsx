import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import { ListOfCategories } from '@components/ListOfCategories/ListOfCategories';

const inter = Inter({ subsets: ['latin'] });

//TODO: Layout
export default function Home() {
  return (
    <SEO_Layout
      title='Petgram'
      metaName='Petgram'
      metaDescription='Tu red social para mascotas'
    >
      <ListOfCategories />
      <div>List of photocards</div>
    </SEO_Layout>
  );
}
