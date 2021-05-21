// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })
  api.loadSource(async actions => {
    const { data } = await axios.get('http://strapi-22coders.herokuapp.com/cases')

    const collection = actions.addCollection({
      typeName: 'Case',
      path:'/cases/:id'
    })


    for (const thecase of data) {
      console.log(thecase.Preview.formats.small.url)
      collection.addNode({
        id: thecase.id,
        task: thecase.Task,
        path:'/cases/'+thecase.id,
        name:thecase.Name,
        sitename: thecase.Sitename,
        smallPreview:thecase.Preview.formats.small.url,
        fullPreview:thecase.Preview.url,
        alternativeText:thecase.Preview.alternativeText

      })
    }
  })
}
