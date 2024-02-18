import React from 'react';
import { MenuMenu, MenuItem, Input, Menu, Container } from 'semantic-ui-react'

import Header from  './Header';
import Footer from "./Footer";
const Dashboard =()=> {
    
    return(
      <>
      
        <main role="main">
  {/* Main jumbotron for a primary marketing message or call to action */}
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Hello, world!</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
  </div>

  <div className="container">
    {/* Example row of columns */}
    <div className="row">
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. 
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
        ut fermentum massa justo sit amet risus.
        you should able to see bottom of the code
        </p>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. 
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
        ut fermentum massa justo sit amet risus.
        you should able to see bottom of the code
        </p>
    <hr />
  </div>
</main>

</>
    )
}

export default Dashboard;