import { useEffect, useLayoutEffect, useState } from 'react'
import { debounce } from 'lodash'

export const useFillScreen = () => {
  const [footerHeight, setFooterHeight] = useState(68)

  const calculateHeight = debounce(() => {
    const footer = document.querySelector('footer')
    const footerHeight = footer?.clientHeight
    setFooterHeight(footerHeight || 80)
  }, 100)

  useEffect(() => {
    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  return { minHeight: `calc(100vh - ${footerHeight}px)`, footerHeight }
}
