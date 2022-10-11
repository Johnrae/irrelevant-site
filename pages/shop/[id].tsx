import { getAllProducts, getProduct } from '../../lib/shopify'

export default function ProductPage({ product }: any) {
  return (
    <div className='min-h-screen py-12 sm:pt-20'>
      {JSON.stringify(product, null, 2)}
    </div>
  )
}

export async function getStaticPaths() {
  const products = await getAllProducts({
    domain: process.env.SHOPIFY_STORE_DOMAIN || '',
    token: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
  })

  const paths = products.map((item: any) => {
    const product = String(item.node.handle)

    return {
      params: { product },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const product = await getProduct(params.product, {
    domain: process.env.SHOPIFY_STORE_DOMAIN || '',
    token: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
  })

  return {
    props: {
      product,
    },
  }
}
