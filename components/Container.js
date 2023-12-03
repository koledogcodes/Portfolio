
export default function Container({ children, light, id }) {
    if (light != undefined) {
        return (
            <div id={id} className="flex justify-center bg-white py-[5%]">
                <div className="w-2/3 h-full">{children}</div>
            </div>
        )
    }

    return (
        <div id={id} className="flex justify-center py-[5%]">
            <div className="w-2/3 h-full">{children}</div>
        </div>
    )
}
