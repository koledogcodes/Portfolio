
export default function Container({ children, simple }) {
    return (
        <div className="flex justify-center">
            <div className="w-2/3 h-full">{children}</div>
        </div>
    )
}
