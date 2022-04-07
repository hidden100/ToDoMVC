import { Components } from "antd/lib/date-picker/generatePicker"
import { observer} from "mobx-react"
import { render } from "react-dom"
import { ListItem } from "../models/ListItem"
import{ ChangeAll, MySourcedata} from '../Services/SourceService'
import {AddItem} from '../Services/SourceService'
import { Component} from 'react'
import { Input, Button , Table, Checkbox, List} from 'antd';
import {CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import ItemView from './ItemView';

 export class ListItemEntry extends Component
{
    constructor()
    {
        super()
        this.state ={
            entry: ListItem.create(
                {
                    name: "",
                    checked: false,
                    id: 0
                }
            )
        }
    }

render() {
    return ( <Input placeholder="What needs to be done?" onPressEnter={this.onAdd} onChange={this.setName.bind(this )} value = {this.state.entry.name} 
    prefix={<Button onClick={() => MudaTudo()} type="primary" icon={<CheckSquareOutlined />}></Button>}

    ></Input>)
}

setName(event) {
   /*  // Extract the current value of the customer from state
    var escrito = this.state.entry.name;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the customer object's first name
    customer.firstName = modifiedValue; */
  
    this.setState({
        entry: ListItem.create(
            {
                name: event.target.value,
                checked: false,
                id: 0
            }
        )
     }
     )
  }
 onAdd = () =>
 {
    console.log(this.state.entry);
     AddItem(this.state.entry)
     console.log(MySourcedata.items[MySourcedata.items.length -1].name);
     this.setState({
        entry: ListItem.create(
            {
                name: "",
                checked: false,
                id: 0
            }
        )
     }
     )
 }
}
export function MudaTudo()
{
   ChangeAll();
}
