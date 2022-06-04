module.exports = (api) => {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    // [
    //   // 'import',
    //   // {
    //   //   libraryName: 'react-use',
    //   //   libraryDirectory: 'lib',
    //   //   camel2DashComponentName: false,
    //   // },
    //   // 'effector-logger/babel-plugin',
    // ],
  ];

  if (process.env.STORYBOOK !== 'true') {
    plugins.push([
      'effector/babel-plugin',
    ]);
  }

  return {
    presets,
    plugins,
  };
};
