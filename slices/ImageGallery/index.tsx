import { PrismicNextImage } from '@prismicio/next'
import { useEffect, useState } from 'react'
import {
  ImageGallerySlice,
  ImageGallerySliceDefaultItem,
} from '../../types.generated'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

interface SelectedImage {
  data: ImageGallerySliceDefaultItem
  index: number
}

export default function ImageGallery({ slice }: { slice: ImageGallerySlice }) {
  const [selectedItem, setSelectedItem] = useState<SelectedImage | null>(null)

  useEffect(() => {
    const handleInput = (e: KeyboardEvent) => {
      if (!selectedItem) return

      if (e.key === 'ArrowLeft') {
        if (selectedItem?.index === 0) {
          return
        }
        setSelectedItem({
          data: slice.items[selectedItem.index - 1],
          index: selectedItem.index - 1,
        })
      }
      if (e.key === 'ArrowRight') {
        if (selectedItem?.index === slice.items.length - 1) {
          return
        }
        setSelectedItem({
          data: slice.items[selectedItem.index + 1],
          index: selectedItem.index + 1,
        })
      }

      if (e.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleInput)

    return () => {
      window.removeEventListener('keydown', handleInput)
    }
  })

  const hasNextImage =
    selectedItem && selectedItem.index < slice.items.length - 1

  const hasPreviousImage =
    selectedItem && selectedItem.index > 0 && slice.items.length > 1

  const selectPreviousItem = () => {
    setSelectedItem((prev) => {
      if (!prev) return null
      if (prev.index === 0) return prev
      return {
        data: slice.items[prev.index - 1],
        index: prev.index - 1,
      }
    })
  }

  const selectNextItem = () => {
    setSelectedItem((prev) => {
      if (!prev) return null
      if (prev.index === slice.items.length - 1) return prev
      return {
        data: slice.items[prev.index + 1],
        index: prev.index + 1,
      }
    })
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {slice.items.map((item, i) => {
        if (!item.image.url) return null
        return (
          <div
            key={item.image.url}
            className='h-40 w-full relative cursor-pointer'
            onClick={() => setSelectedItem({ data: item, index: i })}
          >
            <PrismicNextImage
              className='h-full w-full object-cover'
              field={item.image}
              layout='fill'
            />
          </div>
        )
      })}

      {selectedItem && (
        <div
          className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 p-20 z-50'
          onClick={() => setSelectedItem(null)}
        >
          {hasPreviousImage && (
            <ChevronLeftIcon
              className='h-20 w-20 text-white fixed left-0 top-1/2 -translate-y-1/2 cursor-pointer'
              onClick={(e) => {
                e.stopPropagation()
                selectPreviousItem()
              }}
            />
          )}
          <div
            className='relative h-full w-full select-none'
            onClick={(e) => e.stopPropagation()}
          >
            <PrismicNextImage
              field={selectedItem.data.image}
              layout='fill'
              className='object-contain'
            />
          </div>
          {hasNextImage && (
            <ChevronRightIcon
              className='h-20 w-20 text-white fixed right-0 top-1/2 -translate-y-1/2 cursor-pointer'
              onClick={(e) => {
                e.stopPropagation()
                selectNextItem()
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}
