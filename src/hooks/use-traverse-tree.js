const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    debugger;
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: +new Date(),
        name: item,
        isFolder,
        items: []
      });
      return tree;
    }
    let latestTree = [];
    latestTree = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: latestTree };
  }
  return { insertNode };
};

export default useTraverseTree;
