const scrapeLinks = require('./utils/scraper')

module.exports = async function crawlUrls(paths, depth, http) {
  /*
    As an example, the following extracts links from given website URL or file path
    scrapeLinks('htmls/1.html', false).then(console.log);
    scrapeLinks('https://edition.cnn.com/', true).then(console.log);
  */
  var arr = []

  try {
    for (let i = 0; i < paths.length; i++) {
      const data = await scrapeLinks(paths[i], http)
      if (depth) {
        arr.push(...data)
        arr.push(...(await crawlUrls(data, depth - 1, http)))
      }
    }
    return arr.filter(onlyUnique)
  } catch (e) {
    throw e
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
