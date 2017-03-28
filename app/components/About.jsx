var React = require('react');

var About= (props)=> {

  return(
<div className= "text-center page-title">
  <h3>About </h3>
  <h4>This is a Movies app bulid on React</h4>
  <p>Here are some of the tools i used: </p>
  <ul>

    <li>
      <a herf="http://www.omdbapi.com/">The Open Movie Database

      </a>

    </li>
    <li>
      <a herf="https://facebook.github.io/react/">React</a>
    </li>
  </ul>
           </div>

         )
};

module.exports = About;
