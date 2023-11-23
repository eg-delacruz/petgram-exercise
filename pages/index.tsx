import React from 'react';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';
import { ListOfCategories } from '@components/ListOfCategories/ListOfCategories';
import ListOfPhotoCards from '@components/ListOfPhotoCards/ListOfPhotoCards';

//TODO: Layout
const Home = () => {
  return (
    <SEO_Layout
      title='Petgram'
      metaName='Petgram'
      metaDescription='Tu red social para mascotas'
    >
      <Layout>
        <ListOfCategories />
        {/* We send empty string to get all photos */}
        <ListOfPhotoCards categoryId='' />
      </Layout>
    </SEO_Layout>
  );
};

//Memoize the component to avoid re-renders
export default React.memo(Home);
