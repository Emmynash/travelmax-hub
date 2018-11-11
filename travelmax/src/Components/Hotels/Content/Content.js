import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';
import grid from './Content.css';
import Aux from '../../../HOC/Aux/Aux';
import CarouselSlider from "react-carousel-slider";
// import img from '../../../Assets/Images/Slider/lagos.png';

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


const Content = (props) => {
    const {classes} = props;
    
     let data = [

                                {
                                    "des": "1",
                                    "imgSrc": "../../../Assets/Images/Slider/lagos.png"
                                },
                                {
                                    "des": "2",
                                    "imgSrc": "../../../Assets/Images/Slider/lagos.png"
                                },
                                {
                                    "des": "3",
                                    "imgSrc": "../../../Assets/Images/Slider/lagos.png"
                                },
                                {
                                    "des": "4",
                                    "imgSrc": "../../../Assets/Images/Slider/lagos.png"
                                },
                                {
                                    "des": "5",
                                    "imgSrc": "../../../Assets/Images/Slider/lagos.png"
                                }
                            ];
   
        return(
            <Aux>
            <div className={classes.root}>
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
                                 <br /> <br /> <br />
                                 <Typography variant="h5" gutterBottom>
                                    Top Destinations
                                </Typography>
                                 <CarouselSlider slideItems = {data} />;
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <br /> <br /> <br />
                     <Grid className={grid.content} container spacing={24}>
                        <Grid item xs={12}>
                        
                            <Paper className={classes.paper}>
                            <MaterialIcon icon="weekend" color='grey' size={60}/>
                                 <Typography variant="h4" gutterBottom>
                                    Travelmax: Cheap flights, and incredible hotels
                                 </Typography>
                                                           Travelmax is one of Africa’s leading online travel agency. Based in the beautiful city of Jos, Nigeria. Hundreds of Travelmaxes are dedicated to rocking your travel world. We want our customers to spend less time planning their travels and more time on holiday. Our mission is to save you time, money and stress with our simple online booking platform. You can search, compare and book your travel all in one place.
                            </Paper>
                        </Grid> 
                    </Grid> 
                    <Grid />
                    <Typography style={{marginTop: '80px', textAlign: 'center', alignItems: 'center', width: '100%'}} variant="h5"  className={grid.content} gutterBottom>
                                     Why travellers use Travelmax
                    </Typography>
                    <Grid container spacing={24} className={grid.content}>
                        <Grid item xs>
                         
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="assignment_turned_in" color='#ef5635' size={60}/>
                          <Typography variant="h6" gutterBottom>
                             Secure Payment
                         </Typography>
                                                          
                            Convenient & reliable booking and payment systems. Pay with ease from anywhere around the world!
                          </Paper>
                        </Grid>
                        <Grid item xs>
                          <Paper className={classes.paper}>
                            <MaterialIcon icon="people_outline" color='#ef5635' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 Change and Cancel
                             </Typography>
                                Travelers can change or cancel their reservations. Save the stress of calling the hotel or airline and waiting for customer service  to help you through the process. Easily do it yourself wherever you have Internet access.
                            </Paper>
                        </Grid>
                        <Grid item xs>
                          <Paper className={classes.paper}>
                          <MaterialIcon icon="calendar_view_day" color='#ef5635' size={60}/>
                              <Typography variant="h6" gutterBottom>
                                 Easy Booking
                             </Typography>
                                
                                 At Travelmax all the best travel suppliers and specials can be found, compared and booked quickly and safely. You can mix and match departing and return cheap flights on different airlines and book flexi-tickets. + check customer review and make the best decision
                            </Paper>
                        </Grid>
                    </Grid>
                     
                    <br /> <br />
                     
                </div>
                
                </Aux>
            );
    
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Content);

