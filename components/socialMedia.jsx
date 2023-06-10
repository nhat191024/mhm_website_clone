import Image from "next/image"
import '@styles/social.css'

const socialMedia = () => {
    return (
        <div className=' fixed right-[-110px] top-[400px] z-10'>
            <div className="h-[175px] w-[170px] flex flex-col gap-1 text-xs font-bold text-white">
                <div className="bg-facebook-color w-[170px] h-[40px] rounded flex justify-start items-center gap-1 pl-6 hover:translate-x-[-105px] transition-transform duration-700">
                    <img src="/icons/fbwhite.png" width={20} />
                    <span>Facebook</span>
                </div>

                <div className=" bg-instagram-color w-[170px] h-[40px] rounded flex justify-start items-center gap-1 pl-6 hover:translate-x-[-105px] transition-transform duration-700">
                    <img src="/icons/inswhite.png" width={20} />
                    <span>Instagram</span>
                </div>

                <div className=" bg-youtube-color w-[170px] h-[40px] rounded flex justify-start items-center gap-1 pl-6 hover:translate-x-[-105px] transition-transform duration-700">
                    <img src="/icons/ytbwhite.png" width={20} />
                    <span>Youtube</span>
                </div>

                <div className=" bg-taktak-color w-[170px] h-[40px] rounded flex justify-start items-center gap-1 pl-6 hover:translate-x-[-105px] transition-transform duration-700">
                    <img src="/icons/taktakwhite.png" width={20} className="my-auto"/>
                    <span>TakTak</span>
                </div>
            </div>
        </div>
    )
}

export default socialMedia