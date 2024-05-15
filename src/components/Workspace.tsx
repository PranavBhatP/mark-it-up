import React, { Dispatch, SetStateAction, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import { TbSquareToggleHorizontal } from "react-icons/tb";
import { TbSquareToggle } from "react-icons/tb";

interface EditorProps {
    fileName: string;
    markdownInput: string,
    setMarkdownInput: Dispatch<SetStateAction<string>>;
}
const Editor: React.FC <EditorProps> = ({ fileName, markdownInput, setMarkdownInput}) => {

    const [horizontalView,setHorizontalView] = useState<boolean>(false);
    const saveMarkdown = () => {
        // Get the markdown content from the React state.
        const markdownContent = markdownInput;

        const blob = new Blob([markdownContent], { type: "text/markdown" });
        const anchor = document.createElement("a");
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = "my-markdown-file.md"
        anchor.click();
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdownInput(e.target.value);
    };

    const handleView = () => {
        setHorizontalView(!horizontalView);
    }

    return (
        <>
            { !horizontalView ? 
                <div className="flex w-full h-screen items-center">
                    <div className="w-1/2 h-full outline-none flex p-5 flex-col overflow-hidden bg-black overflow-y-auto">
                        <div className="w-full h-10 border-b border-gray-700 rounded-lg flex items-center justify-between text-xl text-white">
                            {fileName} 👇
                            <p className='text-gray-400 text-sm pr-20'>Characters: {markdownInput.length} | Lines: {markdownInput.split('\n').length }</p>
                            <button onClick = {saveMarkdown} className='border-2 rounded-lg border-blue-700 text-blue-700 text-sm p-2 mb-2'>Download</button>
                        </div>
                        <textarea
                            autoFocus
                            className="font-mono border border-gray-700 m-2 rounded-lg outline-none w-full p-5 min-h-1/2 text-white h-full text-lg bg-black"
                            value={markdownInput}
                            onChange={handleInputChange}
                            placeholder="Enter markdown here..."
                        />
                    </div>
                    <div className="w-1/2 m-6 h-full outline-none flex ml-1 p-5 flex-col border-l border-gray-700 overflow-hidden overflow-y-auto">
                        <div className="w-full h-10 border-b border-gray-700 flex items-center justify-between text-xl text-white py-2">
                            PREVIEW 👇
                            <button onClick = {handleView} className='border-2 rounded-lg border-blue-700 text-blue-700 text-sm p-2 mb-2'><TbSquareToggleHorizontal/></button>
                        </div>
                        { markdownInput.length > 0 ? <Markdown rehypePlugins={[rehypeHighlight]} className = "markdown p-5 border-2 rounded-lg border-gray-700 m-2" remarkPlugins={[remarkGfm]}>{markdownInput}</Markdown> : <p className='pt-80 text-lg text-gray-700 text-center'>Wow! So much empty 😭.</p>}
                    </div>
                </div>    
                    :
                <div className="flex flex-col w-full h-screen items-center">
                    <div className="h-1/2 w-full outline-none flex p-5 flex-col overflow-hidden bg-black overflow-y-auto">
                        <div className="w-full h-10 border-b rounded-lg border-gray-700 flex items-center justify-between text-xl text-white">
                            {fileName} 👇
                            <p className='text-gray-400 text-sm pr-20'>Characters: {markdownInput.length} | Lines: {markdownInput.split('\n').length }</p>
                            <button onClick = {saveMarkdown} className='border-2 rounded-lg border-blue-700 text-blue-700 text-sm p-2 mb-2'>Download</button>
                        </div>
                        <textarea
                            autoFocus
                            className="font-mono border rounded-lg mt-4 border-gray-700 outline-none w-full p-5 min-h-1/2 text-white h-full text-lg bg-black"
                            value={markdownInput}
                            onChange={handleInputChange}
                            placeholder="Enter markdown here..."
                        />
                    </div>
                    <div className="w-full m-6 h-1/2 outline-none flex p-5 flex-col overflow-hidden overflow-y-auto">
                        <div className="w-full h-10 border-b border-gray-700 flex justify-between items-center text-xl text-white py-2">
                            PREVIEW 👇
                            <button onClick = {handleView} className='border-2 rounded-lg border-blue-700 text-blue-700 text-sm p-2 mb-2'><TbSquareToggle/></button>
                        </div>
                        { markdownInput.length > 0 ? <Markdown rehypePlugins={[rehypeRaw]} className = " border border-gray-700 rounded-lg markdown mt-2 px-4" remarkPlugins={[remarkGfm]}>{markdownInput}</Markdown> : <p className='pt-40 text-lg text-gray-700 text-center'>Wow! So much empty 😭.</p>}
                    </div>
                </div>
            }
        </>
        
    );
};
export default Editor;
