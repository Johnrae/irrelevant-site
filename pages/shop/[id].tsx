import { useFillScreen } from '../../hooks/useFillScreen'
import { getAllProducts, getProduct } from '../../lib/shopify'

export default function ProductPage({ product }: any) {
  const { minHeight } = useFillScreen()

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const price = formatter.format(product.priceRange?.minVariantPrice?.amount)

  return (
    <div style={{ minHeight }} className='py-4 px-8 sm:pt-20'>
      <div className='grid gap-4 grid-cols-3'>
        <div className='col-span-1 space-y-4'>
          <img src={product.featuredImage.url} />
          <p className='pt-2'>{price}</p>
          <div>
            <a
              href={product.onlineStoreUrl}
              className='block py-2 px-4 max-w-fit border border-black '
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className='col-span-2'>
          <h3>{product.title}</h3>
          <div
            className='prose'
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        </div>
      </div>
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
      params: { id: product },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const product = await getProduct(params.id, {
    domain: process.env.SHOPIFY_STORE_DOMAIN || '',
    token: process.env.SHOPIFY_STOREFRONT_TOKEN || '',
  })

  return {
    props: {
      product,
    },
  }
}
