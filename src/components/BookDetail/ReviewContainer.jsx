import React from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function ReviewContainer(props) {
    const [value, setValue] = React.useState(props.reviewprops.rating);
    return (
        <div className='reviewContainer'>  
            <Typography component="legend">{props.reviewprops.userModel.userFullName}</Typography>
            <Rating name="disabled" value={value} disabled />
            <p style={{color:'#707070'}}>{props.reviewprops.review}</p>
        </div>
    )
}

export default ReviewContainer
