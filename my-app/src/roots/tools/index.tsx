import { ReactDOM } from 'react-dom/client';
import {App} from  './components/roots/App'

const root = ReactDOM.createRoot(
document.getElementById('root') as HtmlElement
);

root.render(
    <App/>
);