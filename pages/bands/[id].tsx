import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'

export default function Band({ band, navigation, settings }: any) {
  return <h1 className='text-blue-500'>{JSON.stringify(band, null, 2)}</h1>
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const band = await client.getByUID('band', params.uid)

  return {
    props: {
      band,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const bands = await client.getAllByType('band')

  return {
    paths: bands.map((band) => prismicH.asLink(band)),
    fallback: false,
  }
}
