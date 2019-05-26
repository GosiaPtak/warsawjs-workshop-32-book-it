import React, { Component } from 'react';
import { api } from 'services';
import { CardList } from 'components/CardList';

export class Home extends Component {
  state = {
    data: [],
  }

  componentDidMount() {

   api.getData().then((data)=> {
     this.setState({data})
   })
  }
  render() {
    console.log(this.state.data);
    return (<div>{this.state.data.map(item=><CardList key={item.id} item={item}/>)}</div>); }
}
