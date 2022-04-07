import { observer } from "mobx-react";
import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { List, Radio, Button, Space, Row, Col, Divider} from 'antd';
import styles from '../styles/Home.module.css'
import ItemView from '../components/ItemView'
import SortableItem from '../components/SortableItem'
import ListOfItems from '../models/ListOfItems'


const SortableList = SortableContainer(({items,listOfItems,ativos, ...props}) => {
  return (
      listOfItems != undefined && listOfItems != null && items != undefined &&items != null && items.length > 0 ?
        <List
        dataSource={items}
        itemLayout="horizontal"
        renderItem={(itemm, index) => (
                   
          <List.Item>
              <SortableItem key={`item-${itemm.name}`} index={index} value={itemm} />
          </List.Item>
      )}
      {...props}
        
        footer={
          <Row className={styles.MyListFooter}>
          
              <Col className={styles.fatherHeight} span ={4} offset={2}><div>total {ativos}</div>  </Col>
              <Divider type="vertical"/>
              <Col className={styles.fatherHeight} span ={8} offset={2}><Radio.Group  onChange={(e) => handleFilter(e.target.value, listOfItems)} >
  <Radio.Button value="all">All</Radio.Button>
  <Radio.Button value="active">Active</Radio.Button>
  <Radio.Button value="completed">Completed</Radio.Button>
  </Radio.Group></Col>
  <Divider type="vertical"/>
              <Col className={styles.fatherHeight} span ={4} offset={2}>{listOfItems.inactiveCount > 0 ? <Button onClick={() => listOfItems.clearInactive()} >Clear Inactives</Button> : null
  }</Col>
      
  </Row>
               } />
  
               :
               listOfItems.items.length > 0 ? 
               <List  footer={
                <Row className={styles.MyListFooter}>
                
                    <Col className={styles.fatherHeight} span ={4} offset={2}><div>total {ativos}</div>  </Col>
                    <Divider type="vertical"/>
                    <Col className={styles.fatherHeight} span ={8} offset={2}><Radio.Group  onChange={(e) => handleFilter(e.target.value, listOfItems)} >
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="active">Active</Radio.Button>
        <Radio.Button value="completed">Completed</Radio.Button>
        </Radio.Group></Col>
        <Divider type="vertical"/>
                    <Col className={styles.fatherHeight} span ={4} offset={2}>{listOfItems.inactiveCount > 0 ? <Button onClick={() => listOfItems.clearInactive()} >Clear Inactives</Button> : null
        }</Col>
            
        </Row>
                     }></List> :
              <div></div>

    );
  });

  var filterState = "active";
 
  function ActivateEditing(item)
  {
      item.changeEditState(true);
      console.log(item.editing);
  }
  function handleFilter (valor, listOfItems) {
     filterState = valor;
     console.log(filterState,' bla', valor);
     listOfItems.filtrar(valor); 
   };   
  export default observer(SortableList)