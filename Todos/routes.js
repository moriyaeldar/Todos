import {Home} from './pages/home.jsx'
import {TodoApp} from './pages/todo-app.jsx'
import { UserDetails } from './pages/user-details.jsx'
import { TodoDetails } from './pages/todo-details.jsx'
import { TodoEdit } from './pages/todo-edit.jsx'
export default [
  {
        path:'/',
        component: Home,
    },
    {
        path:'/todo',
        component:TodoApp,
    }
   ,
    {
        path:'/user/:userId',
        component:UserDetails,
    }
   ,
    {
        path:'/todo/:todoId',
        component:TodoDetails,
    } 
   ,
    {
        path:'/todo/edit/:todoId',
        component:TodoEdit,
    } 
 
]