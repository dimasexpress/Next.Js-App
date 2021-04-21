
//import Head from 'next/head'
//import styles from '../styles/Home.module.css'

//import Jumbotron from '../../components/jumbotron'
//import Artikel from '../../components/artikel'
//import Pagination from '../../components/pagination'
import Sidebar from '../../components/sidebar'
import Layout from '../../components/layout'
import Menu from '../../data-dummy/menu.json'
import { useRouter } from 'next/router'

export default function Category({ props }) {
    const router = useRouter()
    const { Category } = router.query
  return (
<Layout LayoutProps = {props.menu} >
  

  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Category Page {Category}
      </h3>
      
         </div>
    <Sidebar />
  </div>

</Layout>

)}
Category.getInitialProps =() =>{
  return{ props : {
            menu : Menu
            
    }
  }
}