import { useRef, useState } from "react";

export const Folder = ({ handleInsertFolder, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showVisible, setShowVisible] = useState({
    isVisible: false,
    isFolder: null
  });
  console.log(explorer);
  const handleAddFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowVisible({
      isVisible: true,
      isFolder
    });
    setExpand(true);
  };
  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertFolder(explorer.id, e.target.value, showVisible.isFolder);
      setShowVisible({ ...showVisible, isVisible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div className="folderStructure">
        <div
          className="folder-container"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span>
            <i>📁</i>
            {explorer.name}
          </span>
          <div>
            <button onClick={(e) => handleAddFolder(e, true)}>+ Folder</button>
            <button onClick={(e) => handleAddFolder(e, false)}>+ File</button>
          </div>
        </div>
        <div
          className="childFolder"
          style={{ display: expand ? "block" : "none" }}
        >
          {showVisible.isVisible && (
            <div>
              <span>{showVisible.isFolder ? "📁" : "📄"}</span>
              <input
                name=""
                autoFocus
                type="text"
                onBlur={() => {
                  setShowVisible({ ...showVisible, isVisible: false });
                }}
                onKeyDown={addNewFolder}
              />
            </div>
          )}
          {explorer.items.map((exp, i) => {
            return (
              <div key={i}>
                <Folder
                  handleInsertFolder={handleInsertFolder}
                  explorer={exp}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="folderStructure">
        <span>
          <i>📄</i>
        </span>
        {explorer.name}
      </div>
    );
  }
};
