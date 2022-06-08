import Script from 'next/script';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';

import { Analytics, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import SnippetPage from '../../components/snippet/SnippetPage';
import { Newsletter } from '../../common/components/misc';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import { client } from '../../common/util';

const SnippetHome = ({ snippet, snippets }) => {
  const router = useRouter();
  // TODO1: Create social share image for snippets
  return (
    <>
      <SEO
        title={snippet.title}
        description={snippet.excerpt}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`}
        ogType={'article'}
      />
      <Analytics />

      <Navbar />

      <main>
        <SnippetPage snippet={snippet} snippets={snippets} />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { snippetSlug } = params;

  const { data } = await client.query({
    query: gql`
      query SnippetPage($slug: String) {
        snippet(where: { slug: $slug }, stage: PUBLISHED) {
          updatedAt
          author {
            bio
            name
            photo {
              url
            }
          }
          slug
          title
          excerpt
          content
          publishedAt
        }
        snippets(
          first: 4
          orderBy: publishedAt_ASC
          where: { slug_not: $slug }
        ) {
          title
          slug
          id
        }
      }
    `,
    variables: {
      slug: snippetSlug
    }
  });

  return {
    props: {
      snippet: data.snippet,
      snippets: data.snippets
    }
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query SnippetSlugs {
        snippets {
          slug
        }
      }
    `
  });

  const paths = data.snippets.map((snippet) => {
    return {
      params: {
        snippetSlug: snippet.slug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export default SnippetHome;