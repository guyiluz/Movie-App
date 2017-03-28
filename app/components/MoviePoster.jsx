var React = require('react');
var MoviePoster = React.createClass({

render: function () {
 var movieData = this.props.movieData
var  width= "width: 300px"

  return (

    <div className="card" >
      <div className="card-divider" style={{width:'300px'}}  >
        {movieData.title}
      </div>
      <img src={movieData.poster}/>

      </div>




  )

}
})

module.exports = MoviePoster;
