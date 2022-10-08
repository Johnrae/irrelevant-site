export default function FooterContent() {
  return (
    <>
      <div className='col-span-4 lg:col-span-4 flex flex-col'>
        <span>Irrelevant</span>
        <span>©2022</span>
      </div>
      <div className='col-span-4 lg:col-span-2 flex flex-col'>
        <span>Kyle Swick</span>
        <span className='break-words'>kyle@irrelevantmusic.net</span>
      </div>
      <div className='col-span-4 lg:col-span-1 flex flex-col'>
        <span>design by</span>
        <span>Andrew Walsh</span>
      </div>
      <div className='col-span-4 lg:col-span-1 flex flex-col'>
        <span>code by</span>
        <span>John Rae</span>
      </div>
    </>
  )
}
