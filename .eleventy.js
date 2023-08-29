const { DateTime } = require('luxon');
const { compress } = require('eleventy-plugin-compress');



module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    
    
    eleventyConfig.addFilter('postDate', (dateObj) =>
    {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    eleventyConfig.addShortcode("month", () => `${new Date().toLocaleString('default', {month: 'long'})}`);

    eleventyConfig.addPlugin(compress, {
		enabled: true 
	});

  
    

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}