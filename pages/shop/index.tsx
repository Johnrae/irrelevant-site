import Link from 'next/link'
import { useFillScreen } from '../../hooks/useFillScreen'
import { shopifyClient } from '../../lib/shopify'

function ProductCard({ product }: { product: any }) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const price = formatter.format(product.priceRange?.minVariantPrice?.amount)

  return (
    <Link href={`/shop/${product.handle}`}>
      <div className='group cursor-pointer'>
        <img
          className='pb-4 transition duration-300 grayscale group-hover:grayscale-0'
          src={product.featuredImage.url}
        />
        <h3 className='pb-2'>{product.title}</h3>
        <p>{price}</p>
      </div>
    </Link>
  )
}

export default function ShopIndex({ products }: any) {
  const { minHeight } = useFillScreen()

  return (
    <div style={{ minHeight }} className='py-4 px-8 sm:pt-20'>
      <div className='grid gap-4 grid-cols-4'>
        {products.map(({ node: product }: { node: any }) => {
          console.log(product)
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await shopifyClient.getAllProducts({
    domain: process.env.SHOPIFY_STORE_DOMAIN || '',
    token: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
  })

  return {
    props: { products }, // will be passed to the page component as props
  }
}
