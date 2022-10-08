import { useEffect, useLayoutEffect, useState } from 'react'
import { debounce } from 'lodash'

export const useFillScreen = () => {
  const [footerHeight, setFooterHeight] = useState(80)

  const calculateHeight = debounce(() => {
    const footer = document.querySelector('footer')
    const footerHeight = footer?.clientHeight
    setFooterHeight(footerHeight || 80)
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  useLayoutEffect(() => calculateHeight(), [])

  return { minHeight: `calc(100vh - ${footerHeight}px)`, footerHeight }
}
