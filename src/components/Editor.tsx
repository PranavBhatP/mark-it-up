import React ,{ useState }from 'react'
import Sidebar from './Sidebar';
import Workspace from './Workspace';
const Editor: React.FC = () => {
    const [markdownInput, setMarkdownInput] = useState<string>(``);
    const [fileName, setFileName] = useState<string>('my-markdown-file.md');
    return (
        <div className="flex h-screen bg-black">
                <Sidebar setFileName = {setFileName} markdownInput = { markdownInput } setMarkdownInput={setMarkdownInput}/>
                <div className="flex-1 text-white">
                    <Workspace fileName = {fileName} markdownInput = {markdownInput} setMarkdownInput = {setMarkdownInput} />
                </div>
        </div>
    )
}

export default Editor;