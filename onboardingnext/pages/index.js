import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HiddenList from '../components/HiddenList'
import { ListOfItems } from '../models/ListOfItems'
import{MySourcedata, InitializeSource} from '../Services/SourceService'
import  ListOfItemsView  from '../components/ListOfItemsView'
import { ListItemEntry } from '../components/ListItemEntry'
import { onSnapshot}  from 'mobx-state-tree'
import { Row, Col,Image } from 'antd';
import { useEffect} from 'react'
import SortableComponent from '../components/SortableListView2'
import { log } from 'util';
import { observer } from 'mobx-react';

 function Home() {
  //  useEffect(() =>{
  //     if(localStorage.getItem('mysourcedata'))
  //     {
  //       var ble = JSON.parse(localStorage.getItem('mysourcedata'));
  //       console.log('initial State', ble);
  //       initialState = ble;
  //       bla = ListOfItems.create(initialState);
  //       // InitializeSource(initialState);
  //     }
  //  })
   if(typeof window !== "undefined")
   {
    if(localStorage.getItem('mysourcedata') && huehue != 1)
    {
      huehue = 1;
      var ble = JSON.parse(localStorage.getItem('mysourcedata'));
      console.log('initial State', ble);
      InitializeSource(ble);
      bla = MySourcedata;
      //  localStorage.removeItem("mysourcedata");
      onSnapshot(bla, snapshot =>{
        // localStorage.removeItem("mysourcedata");
        localStorage.setItem("mysourcedata", JSON.stringify(snapshot));
        console.log('gravou local storage', localStorage);
        
      });
    }
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
      <Row className={styles.MyHeader} justify="center">
          <Image
           src="/images/looplogo.jpg"
           height={150}
           width={150}
           alt="o q eh isso?"/>
           
        <h1 className={styles.title}>
          Looplex OnBoarding
        </h1>
      </Row>
        <Col className={styles.MyBody}>
          <ListItemEntry className={styles.ListItemEntry} listOfItems ={bla}/>
          { 
            MySourcedata.items.length > 0 ?
           <SortableComponent className={styles.ListOfItemsView} listOfItems ={bla}></SortableComponent>
           :
           
           null
          }
        </Col>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default observer(Home)
/* const data = ListOfItems.create({
  items :[
 {
     id:1,
     checked: true,
     name: 'pikachu'
 },
 {
     id:2,
     checked: false,
     name: 'squirtle'
 }
]
}) */
var initialState = {
  items :[
 {
     id:0,
     checked: true,
     name: 'pikachurrrr'
 },
 {
     id:1,
     checked: false,
     name: 'squirtle'
 }
],
filterState: 'all'
}
var bla = PegaSource();
var huehue = 0;
function PegaSource()
{

  return MySourcedata;
}
onSnapshot(bla, snapshot =>{
  localStorage.setItem("mysourcedata", JSON.stringify(snapshot));
  console.log('gravou local storage', localStorage);
  
})

/*  setInterval(() =>   
{
  console.log(MySourcedata.items[0].name);
 MySourcedata.items[0].remove();
  if(MySourcedata.items[0].checked == true)
  {
  MySourcedata.items[0].changeState( false);
  MySourcedata.items[0].changeName( 'false');
}
else
{
  MySourcedata.items[0].changeState( true);
  MySourcedata.items[0].changeName( 'true');
  console.log(data.items[0]);
}
}, 5000) */
 

