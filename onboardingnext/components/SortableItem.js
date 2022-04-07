import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { List, Radio, Button, Space, Row, Col, Divider} from 'antd';
import styles from '../styles/Home.module.css'
import ItemView from '../components/ItemView'
import { observer } from 'mobx-react'


const SortableItem = SortableElement(({value}) => 
<ItemView className={styles.ItemView} item={value} ></ItemView>
);

export default observer(SortableItem)