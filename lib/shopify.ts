interface ShopifyCreds {
  domain: string
  token: string
}

export const shopifyClient = {
  getAllProducts,
  getProduct,
  createCheckout,
  updateCheckout,
}

async function ShopifyData(query: string, creds: ShopifyCreds) {
  const { domain, token } = creds
  const URL = `https://${domain}/api/2022-10/graphql.json`

  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options as RequestInit).then((response) => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error(`Error fetching from spotify, ${error}`)
  }
}

export async function getAllProducts(creds: ShopifyCreds) {
  const query = `{
    products(first: 250) {
      edges {
        node {
          handle
          id
          title
          onlineStoreUrl
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            altText
            id
            url
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query, creds)

  const slugs = response.data?.products?.edges
    ? response.data.products.edges
    : []

  return slugs
}

export async function getProduct(handle: string, creds: ShopifyCreds) {
  const query = `
  {
    product(handle: "${handle}") {
      id
      title
      handle
      description
      descriptionHtml
      onlineStoreUrl
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }

      featuredImage {
        altText
        id
        url
      }
      images(first: 5) {
        edges {
          node {
            id
            url
            altText
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query, creds)

  const product = response.data.product ? response.data.product : []

  return product
}

export async function createCheckout(
  id: string,
  quantity: string,
  creds: ShopifyCreds
) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`

  const response = await ShopifyData(query, creds)

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : []

  return checkout
}

export async function updateCheckout(
  id: string,
  lineItems: any[],
  creds: ShopifyCreds
) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`
  })

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
      checkout {
        id
        webUrl
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query, creds)

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : []

  return checkout
}
