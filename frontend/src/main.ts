import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { h } from './utils/h';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(h(App, null));
}
