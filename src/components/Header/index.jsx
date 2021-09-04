// import Link from "next/link"

// const NAV_ITEMS = [
//   { href: "/", label: "FQA" },
//   { href: "/#", label: "WEBチャットbotへ" },
// ];

const Header = () => {
  return (
      <header className="bg-gray-300 ">
        <div className="pt-4">
          <a className="pl-40 text-3xl">Contact Canpany</a>
        </div>
        <div className="flex justify-end items-center border-b w-full h-5 pb-4 pr-20">
          <a className="inline-block py-2 px-6">FQA</a>
          <a className="inline-block py-2 px-6">WEBチャットbotへ</a>
        {/* {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              <a className="">ヘッダー</a>
            </Link>
          )
        })} */}
        </div>
      </header>
  )
}

export default Header