import Link from 'next/link'
import { shopifyClient } from '../../lib/shopify'
import { formatter } from '../../lib/formatter'
import { NavbarSpacerLayout } from '../../layouts/MainLayout'

function ProductCard({ product }: { product: any }) {
  const price = formatter.format(product.priceRange?.minVariantPrice?.amount)

  return (
    <Link href={`/shop/${product.handle}`}>
      <div className='group cursor-pointer'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='pb-4 transition duration-300 grayscale group-hover:grayscale-0 h-40 w-40'
          src={product.featuredImage.url}
          alt={`album art for ${product.title}`}
        />
        <h3 className='pb-2'>{product.title}</h3>
        <p>{price}</p>
      </div>
    </Link>
  )
}

function ShopIndex({ products }: any) {
  return (
    <div className='py-4 px-8'>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-4'>
        {products.map(({ node: product }: { node: any }) => {
          console.log(product)
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

ShopIndex.getLayout = (page: any) => (
  <NavbarSpacerLayout>{page}</NavbarSpacerLayout>
)

export async function getStaticProps() {
  const products = await shopifyClient.getAllProducts({
    domain: process.env.SHOPIFY_STORE_DOMAIN || '',
    token: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
  })

  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default ShopIndex
