import { shopifyClient } from '../../lib/shopify'

export default function ShopIndex({ products }: any) {
  return (
    <div className='min-h-screen py-12 sm:pt-20'>
      <h1 className='text-4xl font-bold text-center'>Shop</h1>

      {JSON.stringify(products, null, 2)}
    </div>
  )
}

export async function getStaticProps() {
  const products = await shopifyClient.getAllProducts({
    domain: process.env.SHOPIFY_STORE_DOMAIN,
    token: process.env.SHOPIFY_STOREFRONT_TOKEN,
  })

  return {
    props: { products }, // will be passed to the page component as props
  }
}
