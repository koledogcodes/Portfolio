
export default function Container({ children }) {
    return (
        <div className="flex justify-center">
            <div className="w-2/3 h-full bg-red-200">{children}</div>
        </div>
    )
}
