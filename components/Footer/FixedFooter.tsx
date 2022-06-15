import FooterContent from './FooterContent'

export default function FixedFooter() {
  return (
    <footer className='w-full grid grid-cols-8 gap-4 py-4 px-8 fixed bottom-0'>
      <FooterContent />
    </footer>
  )
}
