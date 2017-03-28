var React = require('react');
var MovieForm = require('MovieForm');
var MovieBody =require('MovieBody')
var request = require('superagent');
var Movie = React.createClass({


  getInitialState:function(){

     return {
       title:"",
       movieData:{},
       isLoading:true,
       error:false,
       page:1,
       results:0


}},


getMovie: function(title){

  var page=this.state.page

console.log(page)
var  url ="http://www.omdbapi.com/?s="+title+'&page='+page
console.log(url)
request.get(url).then((response)=>{

  if(response.body.Response=='True'){
  this.setState({
     title:title,
     movieData:response.body.Search,
     isLoading:false,
     results:response.body.totalResults

})
}else{

  this.setState({
     title:"" ,
     movieData:{},
     isLoading:true,
     error:true
     })
}


})
},

handlePageNumber:function(num) {
console.log('num',num)

this.setState({
page:num

  })

},
componentDidUpdate: function(prevProps, prevState) {
  if (prevState.page !== this.state.page) {
  this.getMovie(this.state.title)
    }
    if (prevState.title !== this.state.title) {
      this.setState({
      page:1

        })
  }
},

render: function () {
  var {page,isLoading,error} = this.state

   var handlePageNumber= this.handlePageNumber

  var movies= this.state.movieData


      var results= this.state.results
function renderMessage(){
if(isLoading && error==false){

return <h3></h3>



}
if(isLoading== false ) {


return (
<div className="containerx">
  <MovieBody movieData={movies} page={page} getmore={handlePageNumber} results={results} />
</div>
)
}
if(isLoading== true && error==true ) {

return <p>Movie not found go fuck yourself</p>

}
}

 return (
      <div className="contianerFormHeadlinAndMoviebody">
        <div className="movieAndform">
          <h1 className="text-center page-title">Get Movie</h1>
          <MovieForm getMovie={this.getMovie}/>
        </div>
        {renderMessage()}

      </div>
    )
}
});

module.exports = Movie;
