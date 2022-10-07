import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from '../sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes: any[] = [
  {
    type: 'band',
    path: '/bands/:uid',
  },
  {
    type: 'event',
    path: '/events/:uid',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config: any = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}

// data from prismic.io returns the image src as an absolute url, so no need to set up the full url on loader....
export const prismicLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
