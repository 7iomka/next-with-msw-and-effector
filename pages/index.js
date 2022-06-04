import { useState } from 'react';
import { fork, serialize } from 'effector';
import { BaseLayout, getBaseLayoutSSP } from '../layouts/BaseLayout';
import { axiosInstance } from '../shared/api/axios';
import { API } from '../shared/api';
import { getAbsoluteApiUrl } from '../mocks/helpers';

export default function Home({ book }) {
  const [reviews, setReviews] = useState(null)

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.js`.
    fetch(getAbsoluteApiUrl('/reviews'))
      .then((res) => res.json())
      .then(setReviews)
  }

  return (
    <BaseLayout>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </BaseLayout>
  )
}

// export const getServerSideProps = getBaseLayoutSSP(); // simple usage

export async function getServerSideProps(context) {
  // Server-side requests are mocked by `mocks/server.js`.
  // const book = await API.getFx({ url: '/xxxx' });
  const r = await axiosInstance.get('/xxxx');
  const book = r.data;
  console.log('book', book);
  const scope = fork(); // get scope
  const commonServerSideProps = (await getBaseLayoutSSP()(context, scope)).props;


  return {
    props: {
      ...commonServerSideProps,
      initialState: serialize(scope),
      book,
    },
  }
}
