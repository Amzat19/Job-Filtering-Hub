import Header from "../components/Header"

const Page = ({ children }) => {
    return (
        <>
            <Header/>
            <main className='App min-h-screen bg-cyanBg relative'>
                {children}
            </main>
        </>
        
    )
}

export default Page;