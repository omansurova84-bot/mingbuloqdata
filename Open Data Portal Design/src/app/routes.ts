import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Nature } from './pages/Nature';
import { Population } from './pages/Population';
import { Economy } from './pages/Economy';
import { News } from './pages/News';
import { Social } from './pages/Social';
import { History } from './pages/History';
import { Tourism } from './pages/Tourism';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'nature', Component: Nature },
      { path: 'population', Component: Population },
      { path: 'economy', Component: Economy },
      { path: 'news', Component: News },
      { path: 'social', Component: Social },
      { path: 'history', Component: History },
      { path: 'tourism', Component: Tourism },
      { path: 'contact', Component: Contact },
    ],
  },
]);
