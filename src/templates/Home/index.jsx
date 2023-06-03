import './style.css';
import { Component } from 'react';
import React from 'react';

//import { PostCard } from '../../components/postCard';
import { loadPosts } from '../../components/postCard/utils/load-posts'
import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';
import { TextInput } from '../../components/TextInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';


export const Home = () => {

  //  state = {

  //   posts: [],
  //   allPosts: [],
  //   page: 0,
  //   postsPerPage: 2,
  //   searchValue: ''
  // }

  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(2)
  const [searchValue, setSearchValue] = useState('')


  //const { posts, page, allPosts, postsPerPage, searchValue } = this.state

  const noMorePosts = page + postsPerPage >= allPosts.length

  const filtredPosts = searchValue ?

    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())

    }) : posts




  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()

    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)

  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])


  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)


    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target


    setSearchValue(value)
  }


  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && (
          <h1>Search Value: {searchValue}</h1>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange} />

      </div>

      <br /><br /><br />

      {filtredPosts.length > 0 && (
        <Posts posts={filtredPosts} />
      )}

      {filtredPosts.length === 0 && (
        <p>Não existem posts com essa palavra</p>
      )}



      <div className="button-container">
        {!searchValue && (
          <Button
            text="Carregue mais posts"
            onClick={loadMorePosts}
            disable={noMorePosts}

          />

        )}

      </div>

    </section>

  );
}


/*return (
<section className='container'>
  <div className='search-container'>
    {!!searchValue && (
      <h1>Search Value: {searchValue}</h1>
    )}

    <TextInput searchValue={searchValue} handleChange={handleChange} />

  </div>

  <br /><br /><br />

  {filtredPosts.length > 0 && (
    <Posts posts={filtredPosts} />
  )}

  {filtredPosts.length === 0 && (
    <p>Não existem posts com essa palavra</p>
  )}



  <div className="button-container">
    {!searchValue && (
      <Button
        text="Carregue mais posts"
        onClick={loadMorePosts}
        disable={noMorePosts}

      />

    )}

  </div>

</section>

);*/


export class Home2 extends Component {

  state = {

    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  }

  async componentDidMount() {



  }

  //   loadMorePosts = () => {
  //     const {
  //       page,
  //       postsPerPage,
  //       allPosts,
  //       posts
  //     } = this.state

  //     const nextPage = page + postsPerPage
  //     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
  //     posts.push(...nextPosts)

  //     this.setState({ posts, page: nextPage })
  //   }

  //   const handleChange = (e) => {
  //     const { value } = e.target
  //     this.setState({ searchValue: value })
  //   }
  // }

  //   render() {

  //     const { posts, page, allPosts, postsPerPage, searchValue } = this.state
  //     const noMorePosts = page + postsPerPage >= allPosts.length



  //   }
  // }

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
}
