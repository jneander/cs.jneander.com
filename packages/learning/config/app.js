const configureApp = require('@jneander/dev-tools/configuration/configureApp')
const {getEnv} = require('@jneander/dev-tools/utils/cli')

module.exports = configureApp({
  env: getEnv(),
  pages: [
    {
      context: 'data-grids',
      outputPath: 'data-grids',
      pages: [
        {
          name: 'aria-data-tables',
          outputPath: 'aria-data-tables',
          sourcePath: 'aria-data-tables'
        },
        {
          name: 'aria-layout-grids',
          outputPath: 'aria-layout-grids',
          sourcePath: 'aria-layout-grids'
        },
        {
          name: 'data-grid',
          outputPath: 'data-grid',
          sourcePath: 'data-grid'
        },
        {
          name: 'static-grid',
          outputPath: 'static-grid',
          sourcePath: 'static-grid'
        },
        {
          name: 'static-table',
          outputPath: 'static-table',
          sourcePath: 'static-table'
        }
      ],
      sourcePath: 'data-grids',
      template: 'shared/markup/index.html'
    },
    {
      name: 'genetic-algorithms',
      outputPath: 'genetic-algorithms',
      sourcePath: 'genetic-algorithms',
      template: 'shared/markup/index.html'
    },
    {
      name: 'home',
      outputPath: '',
      sourcePath: 'home',
      template: 'shared/markup/index.html'
    }
  ]
})
