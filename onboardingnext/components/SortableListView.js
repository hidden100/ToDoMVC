import React, {Component, createRef} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { List, Radio, Button, Space, Row, Col, Divider} from 'antd';
import styles from '../styles/Home.module.css'
import ItemView from '../components/ItemView'
import { observer } from 'mobx-react'
import SortableList  from '../components/SortableList'
import{MySourcedata} from '../Services/SourceService'





class SortableComponent extends Component {

  state ={
   myref: React.createRef()
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    console.log('puta merda ', oldIndex, newIndex, this.state);

    // var myarray = [...this.props.listOfItems.items];
    // var sorted = this.arrayMoveImmutable(myarray, oldIndex, newIndex);

    // console.log('SORTED atuyalizad', sorted);
    // MySourcedata.setListOfItems(sorted);
    // console.log('MYREF', this.state.myref);

    // var bla  =document.querySelector(".ant-list-item-meta-content");
    // bla.click();
    // console.log('1HHHHHH',bla);
    MySourcedata.arrayMoveImmutableMy(oldIndex, newIndex);
  }
  render() {
      console.log(this.props.footer);
    return <SortableList listOfItems={this.props.listOfItems} ref={this.state.myref} onSortEnd={this.onSortEnd}  {...this.props}/>;
  }
   arrayMoveImmutable(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}
}


export default observer(SortableComponent)


