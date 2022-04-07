import { Input, Button , Table, Checkbox, List, Row, Col} from 'antd';
import {EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react'
import {ChangeSpecificElement,RemoveItem} from '../Services/SourceService';
import { log } from 'util';

 const ItemView = ({item}) =>
(
    <List.Item.Meta  title={
        (
            <Row>
            <Col span={2} offset={1}>
        <Checkbox checked={item.checked} onChange={() => ChageCheckState(item)}  ></Checkbox></Col>
        { item.editing ? <Col span={19}><Input onChange={(e) =>SetName(e.target.value)} onPressEnter={() => Edit(item)} defaultValue={SetDefaultValue(item.name)}></Input></Col>
        :  item.checked ? <Col span={19}> <strike> {item.name}</strike></Col>  :<><Col span={17}><div> {item.name}</div></Col><Col span={2}><Button onClick={() =>ActivateEditing(item)} icon={<EditOutlined />}></Button></Col></>
        
        }
        <Col span= {2}>
            <Button onClick={() => item.remove()} type="primary" icon={<DeleteOutlined />} />
        </Col>
        </Row>
        )
    }
      >
        
</List.Item.Meta> 
        
    
)
var inputName ='';

function ChageCheckState( item)
{
    item.changeState(!item.checked)

    if(item.checked)
    {
        item.changeEditState(false);
    }
    console.log(item.checked, item.editing);
    
}
function SetDefaultValue(name)
{
    inputName = name;
    console.log(name, inputName);
    return name;
}
function SetName(newName)
{
    inputName = newName;
    console.log(inputName);
    
}
function ActivateEditing(item)
{
    item.changeEditState(true);
    console.log(item.editing);
}
function Edit(item){
    item.changeEditState(false);
item.changeName(inputName)
}
/* export function DeleteItem(item)
{
    item.remove();
    //RemoveItem(item);
}

function ChangeElementState(id)
{
    
} */
export default observer(ItemView)
//onChange={() => ChangeElementState(item.id)}