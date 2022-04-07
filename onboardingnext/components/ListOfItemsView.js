import ItemView from '../components/ItemView'
import { observer } from 'mobx-react'
import { List, Radio, Button, Space, Row, Col} from 'antd';
import styles from '../styles/Home.module.css'
import { Divider } from 'antd';
import {EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';




 const ListOfItemsView = ({listOfItems}) => 
      (
          listOfItems.items.length > 0 ?
         <List
             itemLayout="horizontal"
             dataSource={listOfItems.items.filter(x => x.visible)}
             renderItem={itemm => (
                 
                 <List.Item>
                     <ItemView className={styles.ItemView} item={itemm} ></ItemView>
                 </List.Item>
                
             )}
             footer={
                 <Row className={styles.MyListFooter}>
                 
                     <Col className={styles.fatherHeight} span ={4} offset={2}><div>total {listOfItems.activeCount}</div>  </Col>
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
             }
             />

             :
             null

            
     )
 
     function getActions(itemm)
     {
         return(
         [!itemm.editing ? <Button onClick={() =>ActivateEditing(itemm)} icon={<EditOutlined />}></Button> : null, <Button onClick={() => itemm.remove()} type="primary" icon={<DeleteOutlined />} />]
         )
     }
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
export default observer(ListOfItemsView)
