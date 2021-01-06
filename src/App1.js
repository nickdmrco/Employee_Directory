import { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    search: '',
    gifs: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearchGIPHY = event => {
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=${this.state.search}&rating=g&limit=10`)
      .then(({ data: { data: gifs } }) => {
        this.setState({ gifs, search: '' })
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <>
        <form>
            <input 
              type="text" 
              name="search"
              value={this.state.search}
              onChange={this.handleInputChange} />
            <button onClick={this.handleSearchGIPHY}>search</button>
        </form>
        <div>
          {
            this.state.gifs.map(gif => <img key={gif.id} src={gif.images.original.url} alt={gif.title} />)
          }
        </div>
      </>
    )
  }
}

export default App
