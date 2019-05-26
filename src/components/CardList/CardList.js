import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';



export class CardList extends Component{
    
       render() {
           //this.props.item
          //console.log(this.props.item);
         return (
         <Card>
         <CardContent>
         {this.props.item.id}
         </CardContent>
         
         </Card>); }
     }