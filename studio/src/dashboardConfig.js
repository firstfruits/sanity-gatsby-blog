export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9c6878b6c58b06b955d7df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9upyac9t',
                  apiId: '3fb54af2-20a9-43f7-9d48-742ab94756b2'
                },
                {
                  buildHookId: '5e9c6878b6c58b214755d4cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d6x97iii',
                  apiId: '8f1aec25-8ff4-4cf8-85a1-578178eb8637'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firstfruits/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d6x97iii.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
