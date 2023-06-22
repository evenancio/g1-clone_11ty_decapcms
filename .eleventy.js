module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/main.css');
  eleventyConfig.addPassthroughCopy('src/shared.css');
  eleventyConfig.addPassthroughCopy('src/admin');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
