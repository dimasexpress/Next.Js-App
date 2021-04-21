import parse from 'html-react-parser'
import Post from '../data-dummy/post.json'
export default function artikel ({post}){
    return(
        <article className="blog-post">
        <h2 className="blog-post-title">{post.name}</h2>
        <p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

        {parse(post.body)}
      </article>
    )
}