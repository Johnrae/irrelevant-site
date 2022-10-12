export default function FooterContent() {
  return (
    <>
      <div className='col-span-5 flex flex-col'>
        <span className='small'>Irrelevant</span>
        <span className='small'>©2022</span>
      </div>
      <div className='col-span-3 flex flex-row justify-between'>
        <div className='flex flex-col'>
          <span className='small'>Kyle Swick</span>
          <span className='break-words small'>kyle@irrelevantmusic.net</span>
        </div>
        <div className='flex flex-col'>
          <span className='small'>design by</span>
          <span className='small'>Andrew Walsh</span>
        </div>
        <div className='flex flex-col'>
          <span className='small'>code by</span>
          <span className='small'>John Rae</span>
        </div>
      </div>
    </>
  )
}
