
export default function Container({ children, light, dark, id }) {
    if (light != undefined) {
        return (
            <div id={id} className="flex justify-center bg-white py-[6%]">
                <div className="w-3/5 h-full">{children}</div>
            </div>
        )
    }

    return (
        <div id={id} className="flex justify-center py-[6%]">
            <div className="w-3/5 h-full">{children}</div>
        </div>
    )
}
