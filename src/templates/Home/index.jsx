import './style.css';
import { Component } from 'react';
import { PostCard } from '../../components/postCard';
import { loadPosts } from '../../components/postCard/utils/load-posts'


export class Home extends Component {

  state = {

    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  }

  async componentDidMount() {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })

  }

  loadMorePosts = () => {
    console.log('Call this')
  }

  render() {

    const { posts } = this.state
    return (
      <section className='container'>

        <div className="posts">

          {posts.map(post => (

            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />

          ))}

        </div>
        <button onClick={this.loadMorePosts} >Load more posts</button>

      </section>

    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá Mundo!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
