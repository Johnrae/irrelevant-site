import { ConsultingProjectDocument } from '../../types.generated'
import { createClient } from '../../prismic/client'
import Link from 'next/link'
import { NavSpacer } from '../../components/NavSpacer'

function ConsultingProjectRow({ post }: { post: ConsultingProjectDocument }) {
  const { data } = post

  return (
    <div className='relative group'>
      <Link href={`/consulting/${post.uid}`}>
        <div>
          <div className='border-t py-3 cursor-pointer border-black relative z-10'>
            <h1 className='py-8'>{data.title}</h1>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function ConsultingProjectIndex({ posts }: any) {
  return (
    <div>
      <NavSpacer />
      <div className='px-8 py-4 grid md:grid-cols-2 gap-8'>
        {posts.map((post: ConsultingProjectDocument) => (
          <ConsultingProjectRow post={post} key={post.uid} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })

  const posts = await client.getAllByType('consulting-project', {
    // orderings: {
    //   field: 'created-at',
    // },
  })

  return {
    props: {
      posts,
    },
  }
}
