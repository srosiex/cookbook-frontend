import React from 'react'


class SearchBox extends React.Component {
    // constructor(){
    //     super()

    //     this.state = ({
    //         searchQuery: ''
    //     })
    // }

    render(){
    return(
        <div>
            <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleSearch} type="text" name="searchQuery" value={this.props.searchQuery} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )}
}

export default SearchBox