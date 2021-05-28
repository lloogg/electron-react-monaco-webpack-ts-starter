import Editor from '../Editor';
import Explorer from '../Explorer';
import Preview from '../Preview';
import styles from './index.module.css';
const App = () => {
  return (
    <div className={styles.app}>
      <Explorer />
      <Editor />
      <Preview />
    </div>
  );
};

export default App;
