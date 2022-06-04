import { allSettled, fork, serialize } from 'effector';

// GSSP wrapper
/**
 * Returns a "getServerSideProps" function.
*/ 
export const getCoreLayoutServerSideProps = (
  options,
) => {
  const { trigger } = options || {};

  const getServerSideProps = async (
    context,
    scope,
  ) => {
    const currentScope = scope || fork();

    if (trigger) {
      await allSettled(trigger, { scope: currentScope });
    }
    return {
      props: {
        isServerRendering: true,
        initialState: serialize(currentScope),
      },
    };
  };

  return getServerSideProps;
};


// GSP wrapper
/**
 * Only executed on the server side at build time.
 * Computes all static props that should be available for all SSG pages.
 * Returns a "getStaticProps" function.
*/
export const getCoreLayoutStaticProps = (
  options,
) => {
  const { trigger } = options || {};

  const getStaticProps = async (
    context,
    scope,
  ) => {
    const currentScope = scope || fork();

    if (trigger) {
      await allSettled(trigger, { scope: currentScope });
    }

    return {
      props: {
        isServerRendering: true,
        initialState: serialize(currentScope),
      },
    };
  };

  return getStaticProps;
};