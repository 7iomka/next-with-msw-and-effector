import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector';
// import { deleteIn, setIn } from 'xxx/utils';
import { axiosInstance, initialAxiosConfig } from './axios';


const $baseURL = createStore(initialAxiosConfig.baseURL);

// store units for requests
const setHeader = createEvent();

const $headers = createStore({})
// .on(setHeader, (state, { key, value }) =>
//   value === null ? deleteIn(state, key) : setIn(state, key, value),
// );

const $config = combine({
  baseURL: $baseURL,
  headers: $headers,
});

const requestFx = createEffect(async ({ url, query, data, config, method }) => {
  try {
    let result;

    if (method === 'POST') {
      result = await axiosInstance.post(url, data, config);
    } else if (method === 'GET') {
      result = await axiosInstance.get(url, { ...config, params: query });
    } else if (method === 'PUT') {
      result = await axiosInstance.put(url, data, config);
    } else if (method === 'DELETE') {
      result = await axiosInstance.delete(url, config);
    }

    return result.data;
  } catch (e) {
    // throw e?.response?.data;
    console.error('error in request fx', e?.response?.data);
  }
});

const attachedRequestFx = attach({
  source: $config,
  effect: requestFx,
  mapParams(params, { config: baseConfig }) {
    const { config: configFromParams, ...restRequestParams } = params;

    return {
      config: { ...baseConfig, ...configFromParams },
      ...restRequestParams,
    };
  },
});


// Error handling
const throwRequestErrorFx = createEffect(async ({ params, error }) => {
  const errorMsg = error && JSON.stringify(error, null, ' ');
  const info = [
    '---------An error occurred when requesting the server---------',
    params && `Request params: ${JSON.stringify(params, null, '  ')}`,
    errorMsg && errorMsg.indexOf(`<html`) === -1 && `Error message: ${errorMsg}`,
    `isBroswer: ${typeof window !== 'undefined'}`,
  ];

  // console.error(info.filter(Boolean).join('\n'));
});

// Trigger error only in development and ignore aborted requests
sample({
  clock: attachedRequestFx.fail,
  filter: ({ params, error }) => {
    // console.log('params.config', params.config);
    console.log('Request signal is aborted:', params.config?.signal?.aborted);
    return !params.config?.signal?.aborted && process.env.NODE_ENV;
  },
  target: throwRequestErrorFx,
});


const getFx = createEffect(async ({ url, query, config }) =>
  attachedRequestFx({ url, query, method: 'GET', config }),
);

const postFx = createEffect(async ({ url, data, config }) =>
  attachedRequestFx({ url, data, method: 'POST', config }),
);

const putFx = createEffect(async ({ url, data }) =>
  attachedRequestFx({ url, data, method: 'PUT' }),
);

const patchFx = createEffect(async ({ url, data }) =>
  attachedRequestFx({ url, data, method: 'PATCH' }),
);

const deleteFx = createEffect(async ({ url }) =>
  attachedRequestFx({ url, method: 'DELETE' }),
);

export const API = {
  setHeader,
  requestFx,
  getFx,
  postFx,
  putFx,
  patchFx,
  deleteFx,
};

