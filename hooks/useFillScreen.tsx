import { useEffect, useLayoutEffect, useState } from 'react'
import { debounce } from 'lodash'

export const useFillScreen = () => {
  const [minHeight, setMinHeight] = useState('100vh')
  const calculateHeight = debounce(() => {
    const footer = document.querySelector('footer')
    const footerHeight = footer?.clientHeight
    setMinHeight(`calc(100vh - ${footerHeight}px)`)
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])
  useLayoutEffect(() => calculateHeight(), [])

  return { minHeight }
}
