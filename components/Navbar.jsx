import Link from 'next/Link'

export const Navbar = () => {
  return(
    <>
      <nav className='flex justify-end items-center flex-wrap leading-8 bg-blue-600 p-3 '>
        <Link href='/'>
          <a className='font-bold text-2xl p-1 justify-self-start'>Workhorse</a>
        </Link>
        <Link  href="/graph/"><a className='p-1'>Booklist</a></Link>
        </nav>
    </>

  )

}
