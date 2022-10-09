import { createClient } from '../../prismic/client'
import * as prismicH from '@prismicio/helpers'
import { ConsultingProjectDocument } from '../../types.generated'
import { PrismicRichText } from '@prismicio/react'
import SliceRenderer from '../../components/SliceRenderer'

interface PostProps {
  post: ConsultingProjectDocument
  navigation: any
  settings: any
}

function Post({ post }: PostProps) {
  const { data } = post

  console.log(post)

  return (
    <div>
      <div className='px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen'>
        <div className='col-span-1'>
          <div className='space-y-4 text-black'>
            <h2 className='mb-4'>{data.title}</h2>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <div className='break-words space-y-4'>
            <PrismicRichText field={post.data.summary} />
            <SliceRenderer slices={data.slices} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const post = await client.getByUID('consulting-project', params.id)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const posts = await client.getAllByType('consulting-project')

  return {
    paths: posts.map((post) => prismicH.asLink(post)),
    fallback: false,
  }
}

export default Post
