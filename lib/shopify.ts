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

  console.log('URL', URL)
  console.log('domain', domain)
  console.log('storefrontAccessToken', token)

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
      console.log(response)
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error('Products not fetched')
  }
}

export async function getAllProducts(creds: ShopifyCreds) {
  const query = `{
    products(first: 250) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`

  console.log(creds)

  const response = await ShopifyData(query, creds)
  console.log(response)

  const slugs = response.data.products.edges ? response.data.products.edges : []

  return slugs
}

export async function getProduct(handle: string, creds: ShopifyCreds) {
  const query = `
  {
    product(handle: "${handle}") {
    	collections(first: 1) {
      	edges {
          node {
            products(first: 5) {
              edges {
                node {
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  handle
                  title
                  id
                  images(first: 5) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
    	}
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
            title
            id
            availableForSale
            priceV2 {
              amount
            }
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
