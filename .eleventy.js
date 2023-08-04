const { DateTime } = require('luxon');


module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    
    
    eleventyConfig.addFilter('postDate', (dateObj) =>
    {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    eleventyConfig.addShortcode("month", () => `${new Date().toLocaleString('default', {month: 'long'})}`);

  
    

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}