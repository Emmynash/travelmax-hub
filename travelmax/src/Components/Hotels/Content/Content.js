import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';
import grid from './Content.css';
import Aux from '../../../HOC/Aux/Aux';
// import CarouselSlider from "react-carousel-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Col, Row, } from "mdbreact";
import Accra from '../../../Assets/Images/Slider/top_cities/Accra.jpg';
import Paris from '../../../Assets/Images/Slider/top_cities/Paris.jpg';
import Abuja from '../../../Assets/Images/Slider/top_cities/Abuja.jpg';
import London from '../../../Assets/Images/Slider/top_cities/London.jpeg';
import Nairobi from '../../../Assets/Images/Slider/top_cities/Nairobi.jpg';
import Johannesburg from '../../../Assets/Images/Slider/top_cities/Johannesburg.jpg';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class Content extends Component{
    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  
 render(){
        const {classes} = this.props;
        return(
            <Aux>
                <div className={classes.root}>
                      <br /> <br />
                         <Grid className={grid.content} container spacing={24}>
                            <Grid item xs={12}>
                            
                                <Paper className={classes.paper}>
                                <MaterialIcon icon="hotel" color='grey' size={60}/>
                                     <Typography variant="h4" gutterBottom>
                                        Travelmax: Global hotels Search
                                     </Typography>
                                                              trivago’s hotel search allows users to compare hotel prices in just a few clicks from more than 400 booking sites for 1.8 million+ hotels in over 190 countries. With 1.4 billion visits annually to our site, travelers regularly use the hotel comparison to compare deals in the same city. Get information for trips to cities like Las Vegas or Orlando and you can find the right hotel on trivago quickly and easily. New York City and its surrounding area are great for trips that are a week or longer with the numerous hotels available
                                </Paper>
                         </Grid> 
                  </Grid> 
                  <Grid />
                  <br /> <br /> <br />
                  <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                 <Typography variant="h4" gutterBottom>
                                    Don't Know where to go? Let us inspire you!
                                 </Typography>
                                  <br /> <br />
                                 <Typography variant="h5" gutterBottom>
                                    Top Cities
                                </Typography>
                                  <Carousel autoPlay>
                                    <div>
                                      <img alt="Slider(0)" src={Accra} />
                                      <p className="legend">Accra. Ghana</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(1)" src={Paris} />
                                      <p className="legend">Paris</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(2)" src={Abuja} />
                                      <p className="legend">Abuja, Nigeria</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(3)" src={London} />
                                      <p className="legend">London</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(4)" src={Nairobi} />
                                      <p className="legend">Nairobi, Kenya</p>
                                    </div>
                                    <div>
                                      <img alt="Slider(5)" src={Johannesburg} />
                                      <p className="legend">Johannesburg, South Africa</p>
                                    </div>
                                  </Carousel>
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <br /> <br /> <br />
                     <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="find_in_page" color='grey' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Find Cheap and Available Hotels on Travelmax
                                 </Typography>
                                                           With trivago you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across the USA, like San Francisco and Chicago to popular cities and holiday destinations abroad!
                            </Paper>
                        </Grid> 
                      </Grid>
                        <Grid className={grid.content} container spacing={24}>
                         <Grid item xs={12}>
                           <Paper className={classes.paper}>
                           
                            {/* Lagos hotels*/}
                            <div>
                                <Button color="link" onClick={this.toggle} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Lagos Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
                                <Collapse isOpen={this.state.collapse}>
                                  <Card>
                                    <CardBody>
                                    <Row style={{color: 'black'}}>
                                        <Col md="6">
                                              <ul className={classes.Links}>
                                                <li className="list-unstyled">
                                                 Sheraton Hotel
                                                </li>
                                                <li className="list-unstyled">
                                                  Victoria Hotel
                                                </li>
                                                <li className="list-unstyled">
                                                  Redemption
                                                </li>
                                              </ul>
                                         </Col>
                                         <Col md="6">
                                              <ul className={classes.Links}>
                                                <li className="list-unstyled">
                                                 ₦25,000.00 +
                                                </li>
                                                <li className="list-unstyled">
                                                 ₦25,000.00 +
                                                </li>
                                                <li className="list-unstyled">
                                                  ₦25,000.00 +
                                                </li>
                                              </ul>
                                         </Col>
                                    </Row>
                                    </CardBody>
                                  </Card>
                                </Collapse>
                           </div>
                          </Paper>
                        </Grid>
                        <Grid item xs={12}>
                           <Paper className={classes.paper}>
                           
                            {/* Abuja hotels*/}
                            <div>
                                <Button color="link" onClick={this.toggle} style={{textDecoration: 'none', padding: '10px 10px 10px 0', color: '#000', borderBottom: '2px solid #ef5635', width: '200px', textAlign: 'center', marginBottom: 'auto' }}>Abuja Hotels<span style={{marginTop: 'auto'}}><MaterialIcon icon="keyboard_arrow_down" color='grey' size={35}/></span></Button>
                                <Collapse isOpen={this.state.collapse}>
                                  <Card>
                                    <CardBody>
                                    <Row style={{color: 'black'}}>
                                        <Col md="6">
                                              <ul className={classes.Links}>
                                                <li className="list-unstyled">
                                                 Sheraton Hotel
                                                </li>
                                                <li className="list-unstyled">
                                                  Victoria Hotel
                                                </li>
                                                <li className="list-unstyled">
                                                  Redemption
                                                </li>
                                              </ul>
                                         </Col>
                                         <Col md="6">
                                              <ul className={classes.Links}>
                                                <li className="list-unstyled">
                                                 ₦25,000.00 +
                                                </li>
                                                <li className="list-unstyled">
                                                 ₦25,000.00 +
                                                </li>
                                                <li className="list-unstyled">
                                                  ₦25,000.00 +
                                                </li>
                                              </ul>
                                         </Col>
                                    </Row>
                                    </CardBody>
                                  </Card>
                                </Collapse>
                           </div>
                          </Paper>
                        </Grid>
                       </Grid> 
                    <Grid />
                     
                    <br /> <br />
                     
                </div>
                
                </Aux>
            );
    
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Content);

