
export default function NavBarItem({ children, heading = false }) {
    if (heading) {
        return (
            <div className="flex-none w-auto px-3 py-3 font-bold text-xl cursor-default select-none">{children}</div>
        )
    }

    return (
        <div className="flex-none w-auto px-3 py-4 cursor-pointer font-semibold hover:text-red-600 hover:bg-slate-100">{children}</div>
    )
}
