var React = require('react');
var MovieGrid = React.createClass({


render: function () {
var {Title,Poster,Year} =this.props
function img(){
if (Poster=="N/A"){
 return  'https://static.pexels.com/photos/27008/pexels-photo-27008.jpg'
}
  else {
  return  Poster
  }
}

return(
  <div className ="flex-itemCard ">
    <img src={img()}/>

    <h4><b>{Title}</b></h4>
    <p>{Year}</p>

    </div>
)
}
})

module.exports = MovieGrid;
