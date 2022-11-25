import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import { Folder } from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertFolder = (folderId, item, isFolder) => {
    const updatedTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(updatedTree);
  };
  return (
    <div className="App">
      <Folder handleInsertFolder={handleInsertFolder} explorer={explorerData} />
    </div>
  );
}
