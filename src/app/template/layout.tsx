
export default function Layout(
    { children } : { children: React.ReactNode }
) 
{
    return (
        <>
        <div className="flex justify-center w-full h-full pb-36 bg-gray-200">
                {children}
        </div>
        </>
    )
    
}