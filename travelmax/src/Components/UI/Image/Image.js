import React from 'react';
import Image from 'material-ui-image';
import CardMedia from '@material-ui/core/CardMedia';
import SearchBar from '../Search/Search';



const style = {
media: {
 
  paddingTop: '56.25%', // 16:9,
  marginTop:'30',
  
    },
    
    search: {
       
        zIndex: '200',
        position: 'relative',
        marginTop: '-300px'
    }
 
  
};


// const styles = {
//     paperContainer: {
//         height: '500px',
//         width: '100%',
//         backgroundImage: `url(${Image})`,
//         position: 'relative',
//         zIndex: '100'
//     },
    
//     search: {
//         marginTop: '40%',
//         zIndex: '200',
//         position: 'relative'
//     }
// };



const bkImage = (props) =>{
    return(
         <div>
          
         <CardMedia
             
              title=""
              style={{marginTop:'30'}}
              
        >
        
        <SearchBar />
       
        
        </CardMedia>
        <main>
                {props.children}
         </main>
         </div>
        );
};

export default bkImage;



