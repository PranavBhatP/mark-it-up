import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import RevealOnScroll  from './RevealOnScroll';
const Home: React.FC = () => {
  return (
    <div className = "Home bg-black">
        <nav className = "fixed w-full flex items-center justify-between">
            <div className = "mx-4 py-4 flex gap-x-1">
                <svg id="logo-15" width="40" height="40" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path> </svg>
                <h1 className = "font-mono text-white text-3xl">MarkItUp</h1>
            </div>
            <ul className = "flex h-full mx-6 gap-x-10">
                <li className = "hover:text-green-500 h-full m-0 text-white"><a href="/editor">GET STARTED</a></li>
                <li className = "hover:text-green-500 h-full m-0 text-white"><a href = "#features">FEATURES</a></li>
            </ul>
        </nav>
        <main>
            <RevealOnScroll>
                <div className = "flex flex-col h-screen gap-y-10 items-center justify-center">
                    <div className = "flex">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Say # Hello World !',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Create cool markdowns',
                                1000,
                                'Next gen editing',
                                1000,
                                'Build effortless READMEs',
                                1000
                            ]}
                            className='font-mono text-white text-4xl m-0'
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                        <h1 className='text-white text-4xl font-mono'>-with <span style = {{color: "#17CF97"}} >MarkItUp</span></h1>
                
                    </div>
                    <a href = "/editor" style = {{color: "#17CF97", borderColor: "#17CF97"}} className = "border-2 hover:scale-110 rounded-lg border-green-500 w-auto p-2 h-10 text-green-500">Get Started</a>
                    <div className='h-72 w-1 rounded-lg animate-background bg-gradient-to-b from-black via-blue-500 to-green-300'></div>
                    <a style={{backgroundColor: "#17CF97"}} className = "z-10 text-white text-3xl text-center w-16 rounded-full p-3 scroll-smooth" href = "#features">↓</a>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="h-screen flex flex-col items-center gap-y-40" id="features">
                    <h1 className="text-7xl text-white font-mono">Features</h1>
                    <div className="grid grid-cols-3 grid-rows-2 gap-6 h-3/5 px-40 w-full">
                        <div className='p-2 flex items-center flex-col col-span-1 row-span-2 bg-gray-700 shadow-lg border-gray-500 border rounded-lg transition transform duration-200 hover:scale-105'>
                            <h4 style={{ color: "#17CF99" }} className="text-center font-mono p-4 text-2xl">Create Markdowns!</h4>
                            <ul className="p-5 space-y-10 text-white">
                                <li className="text-lg text-center">Markdowns are a form of code enabling you to create vibrant documents to showcase info, in a styled and professional manner.</li>
                                <li className="text-lg text-center">Create markdowns in the blink of an eye, with <span className='text-xl text-green-500'>Markitup</span></li>
                            </ul>
                            <img alt = "create" src = "../../public/img1.png" className = "rounded-lg object-contain min-h-0"/>
                        </div>
                        <div className='p-2 flex items-center justify-center flex-col col-span-1 row-span-1 bg-gray-700 shadow-lg border-gray-500 border rounded-lg backdrop-blur-lg transition transform duration-200 hover:scale-105'>
                            <h4 style={{ color: "#17CF97" }} className="text-center font-mono p-4 text-2xl">Upload Markdowns!</h4>
                            <ul className="p-5 text-white">
                                <li className="text-lg text-center">Upload all the markdowns, you want!</li>
                            </ul>
                            <img alt = "upload" src = "../../public/img2.png" className = "rounded-lg object-contain min-h-0"/>
                        </div>
                        <div className='p-2 flex items-center justify-center flex-col col-span-1 row-span-1 bg-gray-700 shadow-lg border-gray-500 border rounded-lg backdrop-blur-lg transition transform duration-200 hover:scale-105'>
                            <h4 style={{ color: "#17CF97" }} className="text-center font-mono p-4 text-2xl">Stylised Markdowns</h4>
                            <ul className="p-5 text-white">
                                <li className="text-xl text-center space-x-2">A powerful editor lends a dynamic interface, to effortlessly preview markdown.</li>
                            </ul>
                        </div>
                        <div className='p-2 flex items-center justify-center flex-col col-span-2 row-span-1 bg-gray-700 shadow-lg border-gray-500 border rounded-lg backdrop-blur-lg transition transform duration-200 hover:scale-105'>
                            <h4 style={{ color: "#17CF97" }} className="text-center font-mono p-4 text-2xl">Enhance your markdowns with the power of AI</h4>
                            <ul className="p-5 text-white">
                                <li className="text-lg">Bring your words to life, with AI summarisers, powered by Open AI GPT-4o</li>
                            </ul>
                            <img alt = "AI enhance" src = "../../public/img3.png" className = "rounded-lg object-contain min-h-0"/>
                            <p className = "text-xs text-right text-gray-500">*Enhancer is out-of-order due to payment limits by OpenAI API</p>
                        </div>
                    </div>
                </div>

            </RevealOnScroll>
        </main>
        <footer className = "w-full h-10">
            <div className='flex items-center m-4 justify-between'>
                <h1 className='text-2xl text-white font-mono'>©MarkItUp</h1>
                <p className='text-xl text-white font-mono'>Made with ❤️ in React</p>
            </div>
        </footer>
    </div>
  )
}

export default Home;