import React, { Dispatch, SetStateAction, useState} from 'react';
import { FaPlus } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
interface SidebarProps {
    setFileName: Dispatch<SetStateAction<string>>;
    markdownInput: string;
    setMarkdownInput: Dispatch<SetStateAction<string>>;
}

const API_KEY: string | undefined = "ADD_YOUR_KEY_HERE";
// Sidebar Component
const Sidebar: React.FC <SidebarProps> = ({ setFileName, markdownInput, setMarkdownInput }) => {
    const [isLoading, setIsLoading] = useState <string> ('');
    const handleSendRequest = async () : Promise<void> => {
        setIsLoading("Loading...")

        try {
            const response: any = await processMessageToChatGPT();
            console.log(response)
            const content = response.choices[0]?.message?.content;
            if(content) { 
                setMarkdownInput(content);
            }
        } catch (e) {
            console.error("Error getting response from ChatGPT", e);
            setIsLoading("Error getting response.")
        } 
    }

    async function processMessageToChatGPT() {
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            { role: "system", content: `I'm a Working Professional using ChatGPT for editing markdown documents. Can you make the following markdown code better for me? ${markdownInput}. \n Do not give me anything other than the markdown code.` },
          ],
        };
    
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        });
    
        return response.json();
      }

    const handleClearMarkdown = () => {
        alert("You are clearing the markdown!")
        setMarkdownInput(``);
    }
    
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file) {
            const reader = new FileReader();
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = (event) => {
                const fileContent = event.target?.result as string;
                setFileName(file.name);
                setMarkdownInput(fileContent);
            }
            reader.readAsText(file);
        }
    }
    // NOTE: The enhance markdown with GPT-4o doesn't work due to lack of credit balance on my side obviously.
    return (
        <div className="h-screen w-60 px-2 bg-gray-800 text-white rounded-lg">
            <div className="pl-2 pr-5 py-5 flex gap-x-2">
              <a href="/">
                  <svg id="logo-15" width="30" height="30" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path> </svg>
              </a>
              <h3 className =  "text-xl text-white">MarkItUp</h3>
            </div>
            <div className = "flex flex-col my-4 h-5/6 justify-between">
                <ul className="list-none">
                    <li onClick = {handleClearMarkdown} className="flex items-center gap-x-2 p-2 hover:bg-gray-700 cursor-pointer">
                        <FaPlus />
                        <span>Create Markdown</span>
                    </li>
                    <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer">
                        <FaFileUpload />
                        <span>
                            <input 
                            type="file" 
                            accept="text/markdown" 
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">Upload File</label>
                        </span>
                    </li>
                    <li onClick = {handleSendRequest} className=" rounded-lg flex bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 items-center gap-x-1 p-2 hover:bg-gray-700 cursor-pointer">
                        <WiStars className='text-xl' />
                        <span>Enhance with GPT-4o</span>
                    </li>
                    <li className="flex items-center gap-x-1 hover:bg-gray-700 cursor-pointer">
                        <span>{isLoading}</span>
                    </li>
                </ul>
                <div className = "w-full bg-gray-500 flex items-center justify-center h-10">
                    <FaInfo />
                    <span>About</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
