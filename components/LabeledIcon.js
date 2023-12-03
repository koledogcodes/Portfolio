import { InlineIcon } from "@iconify/react";

export default function LabeledIcon({ icon, title, subTitle, padded }) {
    return (
        <div className={"flex flex-row p-0 md:data-[lp=true]:pl-[10%]"} data-lp={padded != undefined}>
            <InlineIcon icon={icon} className="shadow-lg border-[1px] border-slate-100 p-2 rounded-full text-6xl icon text-red-400" />

            <div className="flex flex-col flex-wrap my-auto pl-2">
                <p className="font-bold text-lg">{title}</p>
                <p className="text-slate-700 hover:text-red-400 cursor-pointer">{subTitle}</p>
            </div>
        </div>
    )
}
