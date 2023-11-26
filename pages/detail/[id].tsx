import { useRouter } from 'next/router';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';
import PhotoCardWithQuery from '@components/PhotoCardWithQuery/PhotoCardWithQuery';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SEO_Layout
        title={`Fotografía ${id}| Petgram `}
        metaName='Petgram'
        metaDescription='Tu red social para mascotas'
      >
        <Layout>
          <PhotoCardWithQuery detailId={id} />
        </Layout>
      </SEO_Layout>
    </>
  );
};

export default Detail;
