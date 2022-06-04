import { Provider as EffectorProvider } from 'effector-react/scope';
import { useScope } from '../shared/lib';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

export default function App({ Component, pageProps }) {
  const { initialState} = pageProps;

  const scope = useScope(initialState);
  
  return (
    <EffectorProvider value={scope}>
      <Component {...pageProps} />
    </EffectorProvider>
  )
}
