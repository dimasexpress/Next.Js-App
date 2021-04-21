import Kepala from './header'
import Kaki from './foot'
//import { Children } from 'react'
export default function Layout ({children, LayoutProps}){
    return(
        <>
        <Kepala  menu = {LayoutProps}/>
        <main className="container">
        {children}

        </main>
        <Kaki />
   </>
    )}