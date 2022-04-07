import {types, destroy, detach} from "mobx-state-tree"

import { ListItem } from "./ListItem"

export const ListOfItems = types
.model({
    items: types.optional(types.array(ListItem),[]),
    filterState: types.string
})
.actions(self => ({
    add(item)
    {
        item.setVisibilityByFilter(self.filterState);
        self.items.push(item);
    },
    remove(item)
    {
        destroy(item)       
    },
    filtrar(valor)
    {
        self.filterState = valor;
       self.items.forEach(element => {
           element.setVisibilityByFilter(self.filterState);
           console.log(element.name, element.visible); 
       });

    },
    clearInactive()
    {
        self.items.forEach(element => {
            if(element.checked)
            {
            destroy(element);
            }
        });
    },
    spliceMY(new_index, deleteCount, items)
    {
        self.items.splice(new_index, 0, items);
    },
    arrayMoveImmutableMy(oldIndex, newIndex)
    {
        var souumclone = self.items[oldIndex];
        if(souumclone != undefined)
        {
            
        detach(souumclone);
        
        self.items.splice(newIndex, 0, souumclone);

        }
        console.log('troca pqp', self.items[0], self.items[1]);

        self.items.forEach(element => {
            element.changeId(self.items.indexOf(element));
        });
        return self;
    },
    setListOfItems(items)
    {
        self.items = items;
    },
    detach(item)
    {
        detach(item)       
    }
    
}))
.views(self => ({
    get todosNomes ()
    {
        var todos = '';
        
        self.items.forEach(element => {
            todos = todos + ',' + element.name
        });
        return todos;
    },
    get activeCount ()
    {
        var ativos = self.items.filter(x => !x.checked);

        if(ativos != undefined && ativos != null){
            return ativos.length;
        }
        return 0;
    },
    get inactiveCount ()
    {
        var ativos = self.items.filter(x => x.checked);

        if(ativos != undefined && ativos != null){
            return ativos.length;
        }
        return 0;
    }

}))

