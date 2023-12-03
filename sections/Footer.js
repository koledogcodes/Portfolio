import SocialBlade from "./SocialBlade";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row h-[150px] justify-center bg-gray-800">
            <div className="basis-5/6 pt-5 md:pt-0 md:basis-4/6 text-2xl text-white text-center font-bold my-auto">
                Copyright © 2023. All rights reserved
            </div>

            <div className=" flex my-auto mx-auto md:mx-0 pb-5 md:pb-0">
                <SocialBlade />
            </div>
        </footer>
    )
}
