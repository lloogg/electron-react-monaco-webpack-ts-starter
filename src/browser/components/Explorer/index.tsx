import styles from './index.module.css';
import { ChangeEvent, useState, useEffect } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const Explorer = () => {
  const [projectPath, setProjectPath] = useState();
  const [fileTree, setFileTree] = useState();
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const handleToggle = (event: ChangeEvent<{}>, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };
  const handleSelect = (event: ChangeEvent<{}>, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const renderTree = (nodes) =>
    nodes && (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  useEffect(() => {
    window.electron.getProjectPath((data) => {
      setProjectPath(data[0]);
    });
  }, []);

  useEffect(() => {
    if (projectPath) {
      const fTree = window.electron.directoryTree(projectPath, {
        extensions: /\.(c)$/,
      });
      setFileTree(fTree);
    }
  }, [projectPath]);

  return (
    <div
      className={styles.explorer}
      onClick={() => {
        console.log(fileTree);
      }}
    >
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        {renderTree(fileTree)}
      </TreeView>
    </div>
  );
};

export default Explorer;
