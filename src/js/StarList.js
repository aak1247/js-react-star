'use strict'

import React from 'react';
import '../scss/star.scss'
import '../scss/starList.scss'


function Star (props) {
    //state: empty/half/filled
    let width = "50%";
    if (props.state == 'empty')
    return(
        <span className="glyphicon glyphicon-star-empty"></span>
    );
    if (props.state == 'filled')
    return(
        <span className="glyphicon glyphicon-star"></span>
    );
    if (props.state == 'half')
    return(
        <span className="glyphicon glyphicon-star">
            {/* <span className="glyphicon glyphicon-star" style={{width: width}}></span> */}
        </span>
    );
}


function HalfStar(){
    return
        <div className="halfStar" style={{display: "inline"}}>
            <div className="fullStar">
            <span className="glyphicon glyphicon-star-empty"></span>
            </div>
            <div className="emptyStar">
            <span className="glyphicon glyphicon-star-empty"></span>
            </div>
        </div>

}

class StarList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 5
        };
        if (props.total == null) this.props = {
            total: 5};
        else this.props = {
            total: props.total};
         this.handleClick = this.handleClick.bind(this);
    }



    static defaultProps () {
        return ({
            total: 5
        });
    }

    handleClick(event) {
        let pos = getPositionX(event);
        let target = event.target;
        let count = 0 ;
        while (true) {
            if (target.previousSibling != null) {
                target = target.previousSibling;
                count ++;
            }else break;
        }
        let percent = pos / target.clientWidth;
        if (percent > 0.5) 
            this.setState({value: count + 0.5});
        else this.setState({value: count});
    }

    initilalState() {
        return {
            value: this.props.total
        }
    }

    renderStar(star) {
        return (
            <Star key={star.key} state={star.state} />
        );
    }

    render(){
        let filled = Math.floor(this.state.value);
        let half = 0;
        if (this.state.value - filled == 0.5) half = 1;
        let empty = Math.floor(this.props.total - this.state.value);
        let starList = [];
        for (let i = 0 ; i < filled ; ++ i) {
            starList.push({
                key: i,
                state: 'filled'});
        }
        if (half != 0)
            starList.push({
                key: filled + half - 1,
                state: 'half'
            });
        for ( let i = 0 ; i < empty ; ++ i) {
            starList.push({
                key: i + half + filled,
                state: 'empty'});
        }

        return (
        <div className="starList" onClick={this.handleClick}>
            {starList.map((star)=>{
                return this.renderStar(star);
            })}
        </div>
        );
    }
}

var getPositionX = event => {
    let offset = event.pageX;
    offset -= event.target.offsetLeft;
    return offset;
}



export  {StarList,Star}