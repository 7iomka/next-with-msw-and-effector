module.exports = (api) => {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
  ];

  if (process.env.STORYBOOK !== 'true') {
    plugins.push([
      'effector/babel-plugin',
      {
        importName: ['effector'],
        addLoc: true,
        reactSsr: true,
      }
    ]);
  }

  return {
    presets,
    plugins,
  };
};
