var React = require('react');

var MovieForm = React.createClass({

  handleSearch: function (e) {
    e.preventDefault()
  var title = this.refs.movie.value
if(title.length>0){
  this.props.getMovie(title)
}


},

  render: function () {


  return (
      <div>

        <form>
          <input  type = 'search' placeholder="Get Movie" ref="movie" />
          <button  onClick={this.handleSearch}  className="button expanded hollow "> Get Movie</button>

        </form>

      </div>
    )
  }
});

module.exports = MovieForm;
