

import { observer } from 'mobx-react'
import ItemView from './ItemView';
import{ ChangeAll} from '../Services/SourceService'
import { ListItemEntry} from '../components/ListItemEntry'
import { Input, Button , Table, Checkbox, List} from 'antd';
const  HiddenList =({listitems}) =>
(
    <><ListItemEntry listitems ={listitems}/>
    <List
        itemLayout="horizontal"
        dataSource={listitems}
        renderItem={itemm => (
            <List.Item>
            <ItemView item ={itemm}></ItemView>
          </List.Item>
        )} /></>
)

 
    

export function MudaTudo()
{
   ChangeAll();
}
export default observer(HiddenList)