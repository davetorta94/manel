import Link from "next/link"
import { categories } from "@/libs/data"


export const Cellphone = () => {
    return(
        <>
        <div className="flex justify-center w-full h-full pt-100 mt-52 animate-fade-up animate-duration-[2000ms] animate-delay-1000">
        
        {
            categories.length === 0 ? (
                <div></div>
            ) : (
                
                    categories.map((category) => (
                <div key={category.id}>
                
                <Link href={`/template?videoId=${category.example}&link=${encodeURIComponent(category.link)}`} aria-label={`Visitar categoria ${category.name}`}>
                    <div className="relative flex justify-center h-[300px] w-[160px] border border-4 border-black rounded-2xl bg-gray-50 hover:bg-red-400" style={{boxShadow: '5px 5px 2.5px 6px rgb(209, 218, 218)'}}>
                        <div className="relative-goup">    
                            <span className="block border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"></span>
                            <span className="absolute -right-2 top-14 border border-4 border-black h-7 rounded-md" />
                            <span className="absolute -right-2 bottom-36 border border-4 border-black h-10 rounded-md" />
                        <div className="absolute inset-0 flex pt-20 justify-center text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
                    {category.name}
                        </div>
                        </div>
                    </div>
                
                </Link>
                </div>
                    )

                    )
                
                
            )
        }

        </div>
        </>
    )
}