// module.exports = {
//      sassOptions: {
//          includePaths: [path.join(__dirname, 'styles')],
//        },
//     webpack: config => {
//         config.resolve.alias['components'] = path.join(__dirname, 'components')
//         config.resolve.alias['public'] = path.join(__dirname, 'public')
//         config.resolve.alias['styles'] = path.join(__dirname, 'styles')

//         return config
//     }
// }

const path = require('path');
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  },
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')

    return config
}
});