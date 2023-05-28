import './style.css';
import { Component } from 'react';
import { PostCard } from '../../components/postCard';
import { loadPosts } from '../../components/postCard/utils/load-posts'
import { Button } from '../../components/Button';


export class Home extends Component {

  state = {

    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 99
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
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  render() {

    const { posts, page, allPosts, postsPerPage } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length
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

        <div class="button-container">
          <Button
            text="Carregue mais posts"
            onClick={this.loadMorePosts}
            disable={noMorePosts}

          />

        </div>

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
