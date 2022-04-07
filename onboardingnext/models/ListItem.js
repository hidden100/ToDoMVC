import {types, getParent} from "mobx-state-tree"

export const ListItem = types
.model({
    name: types.string,
    checked: types.boolean,
    id: types.number,
    editing:  false,
    visible: true
})
.actions(self => ({
     changeState(selecionado)
    {
        self.checked = selecionado
    },
    changeName(nome)
    {
        self.name = nome
    },
    remove()
    {
        getParent(self,2).remove(self)
    },
    changeEditState(valor)
    {
        self.editing = valor
    },
    changeVisibility(valor)
    {
        self.visible = valor;
    },
    changeId(valor)
    {
        self.id = valor;
    },
   

    setVisibilityByFilter(valor)
    {
        if(valor == 'all')
        {
           self.visible = true;
        }
        if(valor == 'active')
        {
                if(self.checked)
                {
                    self.visible =false;
                }
                else
                {
                    self.visible =true;
                }
            
        }
        if(valor == 'completed')
        {
                if(self.checked)
                {
                    self.visible =true;
                }
                else
                {
                    self.visible =false;
                }
        }
    }
    
    
}))


