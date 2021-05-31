import styles from './index.module.css';
const Preview = () => {
  return (
    <div
      className={styles.preview}
      onClick={() => {
        console.log(
          window.electron.getFileTree(
            'C:\\Users\\septlog\\Downloads\\work\\weixuyang\\ModelCoderGUI\\src',
          ),
        );
      }}
    >
      preview
    </div>
  );
};

export default Preview;
