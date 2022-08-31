import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-rating-stars-component'
import {render} from 'react-dom'
import { FaBeer } from 'react-icons/fa';
function Cards(){
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //   };
    //   render(
    //     <ReactStars
    //         count={5}
    //         onChange={ratingChanged}
    //         size={24}
    //         activeColor="#ffd700"
    //     />,
    //     document.getElementById("rate-course")
    //     );
    const Data = [
        {id:'1',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6ByYQ1KSvdKIZ1ZLxM-UmPc-UXGVO-XrAw&usqp=CAU' ,title: 'learn python from zero to hero', instructor: 'jose portila', stars:4, students:1432, price: 124, priceBefore: '200$', bestSeller:true, },
        {id:'2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9pnZ88bm20cYxDztLVOc-AkdPlyB0NNBYg&usqp=CAU', title: 'learn java from zero to hero', instructor: 'pashka joe', stars:3, students:142, price: 130,priceBefore: '200$', bestSeller:true, },
        {id:'3',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahytrwyznaMrALcXHCveJI257NFmgzasEXA&usqp=CAU', title: 'learn exel from zero to hero', instructor: 'louse arwqd', stars:2, students:5532, price: 455,priceBefore: '200$', bestSeller:true, },
        {id:'4',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XAWcuDtAJRW9wkPObac79N-NzOjEpIH6XA&usqp=CAU', title: 'learn drawing from zero to hero', instructor: 'rosey tila', stars:1, students:628, price: 345,priceBefore: '200$', bestSeller:true, },
       ];

    const dataComp = Data.map(function(data){
        return(
            <article className="card-box col-lg-3 col-md-4 col-sm-12" key={data.id}>
                <img src={data.image} className="img-fluid" alt="pyramids" />
                <h5 className="mb-1">{data.title}</h5>
                <p className="mb-1">{data.instructor}</p>
                <div className="rate" id="rate-course">
                <span className="watch-rate" >({data.students})</span>
                </div>
                <div className="price mb-1">
                    <h4 className="price-after" id="testH">{data.price}</h4>
                    <h4 className="price-before">{data.priceBefore}</h4>
                </div>
            </article>
        );
    });
    return (
        <div className='row'>{dataComp}</div>
    )
};

export default Cards