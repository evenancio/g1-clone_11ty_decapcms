module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/main.css');
  eleventyConfig.addPassthroughCopy('src/shared.css');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
