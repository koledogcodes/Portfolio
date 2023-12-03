
export default function NavBarItem({ children, href, heading = false }) {
    if (heading) {
        return (
            <a href={href} className="flex-none w-auto px-3 py-3 font-bold text-xl cursor-default select-none">{children}</a>
        )
    }

    return (
        <a href={href} className="flex-none w-full sm:w-auto px-3 py-4 cursor-pointer font-semibold hover:text-red-600 hover:bg-slate-100">{children}</a>
    )
}
