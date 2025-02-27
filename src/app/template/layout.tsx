import { Suspense } from "react";

export default function Layout(
    { children } : { children: React.ReactNode }
) 
{
    return (
        <>
        <div className="flex justify-center w-full h-full pb-36 bg-gray-200">
        <Suspense fallback={<div>Loading...</div>}>
                {children}
        </Suspense>
        </div>
        </>
    )
    
}