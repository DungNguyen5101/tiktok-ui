import Home from '@/pages/Home';
import Search from '@/pages/Search';
import { HeaderOnly } from '@/components/Layout';
import Folowing from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
const publicRoutes = [
    {path: '/', component:Home},
    {path: '/following', component:Folowing},
    {path: '/profile', component:Profile},
    {path: '/upload', component:Upload, layout: HeaderOnly},
    {path: '/search', component:Search, layout: null},

];

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes}