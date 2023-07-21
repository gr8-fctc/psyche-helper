import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <main className="">
      <div className="flex items-center space-x-2 pl-2 pr-2 bg-pink-100 rounded">
        <Link href="https://fct-club.com">
        <div>
        <Image className="flex object-fit: contain "
          src="data:image/jpeg;base64,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"
          width={20}
          height={20}
          alt={"icon"}
        />
        </div>
        </Link>

        <Link href="/">
          <div className='rounded'>
            <a className="rounded-md flex hover:bg-pink-200 transition-all" href="/">Problems</a>
          </div>
        </Link>

        <Link href={"/"}>
          <div>
            <a className="flex hover:bg-pink-200 transition-all" href="/">Submission</a>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="ltr absolute right-0 pr-2">
            <a className="flex">Logged in as</a>

          </div>
        </Link>
      </div>
      <div className="flex pt-4">
        <h1>Body of the page</h1>
      </div>
    </main>
    </>
  )
}
