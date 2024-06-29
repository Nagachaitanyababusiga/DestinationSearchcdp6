import {Component} from 'react'
import Card from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  Updater = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const changedlist = destinationsList.filter(x =>
      x.name.toLowerCase().includes(searchInput),
    )
    console.log(destinationsList)
    return (
      <div className="cont-1">
        <h1 className="header">Destination Search</h1>
        <div className="searchbarcont">
          <input
            className="searchbar"
            placeholder="Search..."
            type="search"
            onChange={this.Updater}
            alt="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
          <img
            className="search"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>

        <ul className="Card-cont">
          {changedlist.map(x => (
            <Card key={x.id} name={x.name} imgUrl={x.imgUrl} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
