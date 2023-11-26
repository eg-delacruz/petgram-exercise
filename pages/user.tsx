import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';

const User = () => {
  return (
    <SEO_Layout
      title='Perfil de usuario | Petgram'
      metaName='Petgram'
      metaDescription='Información del usuario'
    >
      <Layout>
        <div>User. Protect route</div>
      </Layout>
    </SEO_Layout>
  );
};

export default User;
