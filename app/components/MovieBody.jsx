var React = require('react');
var MovieGrid = require('MovieGrid');
var MovieBody = React.createClass({

handleClick:function(){
var page= this.props.page
if(this.props.results/10>=page){

var  x= page+1
console.log('this is body page',x)
this.props.getmore(x)
}
},


handleClickPrev:function(){
var page= this.props.page
if(page>1){
var  x= page+-1
console.log('this is body page',x)
this.props.getmore(x)
}
},



render: function () {
  var PageNumber= 0

var movieData =this.props.movieData
function renderMovies(){
  return movieData.map((movie, index) => {
PageNumber++
   return  <MovieGrid key={movie.imdbID} {...movie} />

})
}
return(
  <div className="containerBody" >
    <div className="btnCoun ">
      <button className="button secondary " onClick={this.handleClick}> Next </button>   <button className="button secondary prev" onClick={this.handleClickPrev}> Prev </button>
    </div>

    <br/>
    <div className="posterContainer">
      {renderMovies()}
    </div>
  </div>

)
}
});

module.exports = MovieBody;
