import ReactDOM from 'react-dom';
import App from './components/App';
declare global {
  interface Window {
    electron: any;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
