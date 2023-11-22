import { useRouter } from 'next/router';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';
import { ListOfCategories } from '@components/ListOfCategories/ListOfCategories';
import ListOfPhotoCards from '@components/ListOfPhotoCards/ListOfPhotoCards';

const PetCategoryPictures = () => {
  const router = useRouter();
  const { id } = router.query;
  const stringId = id?.toString() || '';

  return (
    <SEO_Layout
      title='Petgam | Categorías'
      metaName='Categorías'
      metaDescription='Fotos de mascotas según su categoría.'
    >
      <Layout>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={stringId} />
      </Layout>
    </SEO_Layout>
  );
};

export default PetCategoryPictures;
