module.exports = {
    publicPath: '/personal/',
    pages: {
      index: {
        // entry for the page
        entry: 'src/home/main.js',
        // the source template
        template: 'public/index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Home',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      schedulizer: {
        entry: 'src/schedulizer/main.js',
        template: 'public/index.html',
        title: 'Schedulizer',
        chunks: ['chunk-vendors', 'chunk-common', 'schedulizer']
      },
      laptrack: {
        entry: 'src/laptrack/main.js',
        template: 'public/index.html',
        title: 'LapTrack',
        chunks: ['chunk-vendors', 'chunk-common', 'laptrack']
      },
      contact: {
        entry: 'src/contact/main.js',
        template: 'public/index.html',
        title: 'Contact',
        chunks: ['chunk-vendors', 'chunk-common', 'contact']
      }
    }
  }