import React from 'react';
// import Image from 'material-ui-image';
import CardMedia from '@material-ui/core/CardMedia';
import SearchBar from '../Search/Search';



// const style = {
// media: {
 
//   paddingTop: '56.25%', // 16:9,
//   marginTop:'30',
  
//     },
    
//     search: {
       
//         zIndex: '200',
//         position: 'relative',
//         marginTop: '-300px'
//     }
 
  
// };



const bkImage = (props) =>{
    return(
         <div style={{zIndex:200}}>
          
         <CardMedia
             
              title=""
              style={{marginTop:'30', zIndex:200}}
              
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



