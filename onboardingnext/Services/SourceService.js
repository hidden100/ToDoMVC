
import { ListOfItems } from '../models/ListOfItems'

import { onSnapshot}  from 'mobx-state-tree'
//import { localStorage} from ''

export var MySourcedata = GetSourceData();
function GetSourceData()
{
    
    
    var ble = ListOfItems.create({
        items :[
            ],
 filterState: 'all'
 })
//  ble.remove(ble.items[0]);

 return ble;
}
export function InitializeSource(items)
{
    if(ListOfItems.is(items))
    {
    MySourcedata = ListOfItems.create(items);
    }

    console.log('my source data',MySourcedata.items);
}
 export function ChangeAll()
 {
     if(MySourcedata.items != undefined &&
        MySourcedata.items != null &&
        MySourcedata.items.length > 0)
        {
            var deselecionados = MySourcedata.items.filter(x => x.checked == false);
            if(deselecionados != undefined && deselecionados != null && deselecionados.length > 0)
            {
                SelectAll();
            }
            else
            {
                DeSelectAll();
            }
        }
   
 }
function SelectAll()
{
    MySourcedata.items.forEach(element => {
        element.changeState(true);
         
     });
}
  function DeSelectAll()
 {
    MySourcedata.items.forEach(element => {
        element.changeState(false);
         
     });
 }
 export function ChangeSpecificElement( id)
 {
     var toChange = MySourcedata.items.filter(x => x.id == id)[0];
     if(toChange != undefined && toChange != null)
     {
         toChange.changeState(!toChange.checked);
     }
 }
 export function RemoveItem(item)
 {
     alert('removeu?')
    MySourcedata.remove(item);
    alert(MySourcedata.length);
 }
 export function AddItem(item)
 {
     if(item.name != ''  && MySourcedata.items.filter(x => x == item).length ==0)
     {
        MySourcedata.add(item)
        console.log('FDP',MySourcedata);
        
     }
 }


