import Link from 'next/link'
export default function Kepala ({ menu }) {return(
<div className="container">
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="link-secondary" href="#">Subscribe</a>
      </div>
      <div className="col-4 text-center">
        <a className="blog-header-logo text-dark" href="#">Large</a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
       <Link href="/search" >
        <a className="link-secondary"aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
        </Link>
        <Link href="/login">
        <a className="btn btn-sm btn-outline-secondary">Sign up</a>
        </Link>
        
      </div>
    </div>
  </header>

  <div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      {
        menu.map(ii => (<Link   href={{
          pathname : '/poss/[Category]',
          query : {Category : ii.id}
        }}key={ii.id}>
          <a className="p-2 link-secondary">{ii.title}</a>
      </Link>  )
          )
      }
      
    </nav>
  </div>
</div>
)}