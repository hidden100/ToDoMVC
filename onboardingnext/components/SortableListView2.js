import React, {Component, createRef} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { List, Radio, Button, Space, Row, Col, Divider} from 'antd';
import styles from '../styles/Home.module.css'
import ItemView from '../components/ItemView'
import { observer } from 'mobx-react'
import SortableList  from '../components/SortableList'
import{MySourcedata} from '../Services/SourceService'
import { ListOfItems } from '../models/ListOfItems';





const SortableComponent = ({listOfItems}) =>(
    <SortableList listOfItems={listOfItems} tamanho={listOfItems.items.length} ativos={listOfItems.activeCount} items={listOfItems.items.filter(x => x.visible)} onSortEnd={onSortEnd} onSortStart={onSortStart} 
    disableAutoscroll
    helperClass="row-dragging"/>
)
function  onSortEnd({oldIndex, newIndex}) {
    console.log('puta merda ', oldIndex, newIndex);

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
  function onSortStart(event)
  {
    // alert('sort start');
  }
    


export default observer(SortableComponent)


