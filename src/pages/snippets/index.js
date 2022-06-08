import { gql } from '@apollo/client';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import SearchPage from '../../components/search/SearchPage';
import { Newsletter } from '../../common/components/misc';

const Snippets = ({ snippets }) => {
  return (
    <>
      <SEO
        title={'Snippets'}
        description={'Explore snippets'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage activeTab={1} snippets={snippets} />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query SnippetsPage {
        snippets(orderBy: publishedAt_DESC, first: 4) {
          id
          title
          slug
        }
      }
    `
  });

  return {
    props: {
      snippets: data.snippets
    }
  };
}

export default Snippets;