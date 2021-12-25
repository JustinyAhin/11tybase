module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};