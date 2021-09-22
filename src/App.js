import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.css";

import TableHeading from "./components/TableHeading.jsx";
import NewHeader from './components/Header.jsx';
import ListsGroup from './components/ListsGroup';

import { useSelector, useDispatch } from 'react-redux'
import { load } from './features/lists/listsSlice'


function App() {
  const lists = useSelector((state) => state.lists.data);
  const dispatch = useDispatch();



  const currency = {base: "EUR", rates: {CAD: 1.48, RUB: 91.1}};
  const rateCadRub = currency.rates.RUB / currency.rates.CAD;

  // function convertCosts(arr, curr) {
  //   let newArr = arr.map(item => {
  //     if(item.currency !== settings.appCurrency) {
  //       //convert price and update currency
  //       if(item.currency === "cad") {
  //         //Result * 10, round it to a number and them /10 to get 1 decimal num
  //         return {...item, price: ((Math.round((item.price * rateCadRub) * 100) / 100)), currency: "rub"};
  //       } else if(item.currency === "rub") {
  //         return {...item, price: ((Math.round((item.price / rateCadRub) * 100) / 100)), currency: "cad"};
  //       }
  //     } else {
  //       //save existing object
  //       return item;
  //     }
  //   })
  //   return newArr;
  // }



  async function fetchData() {
    try {
      const savedLists = await axios.get('https://organizer-apps-api.herokuapp.com/lists');
      console.log("API Expences result: ", savedLists.data)
      dispatch(load(savedLists.data))
      // const settingsData = await axios.get('https://organizer-apps-api.herokuapp.com/settings');

      // setSettings({budget: settingsData.data[0].budget, appCurrency: "rub", budgetCurrency: "cad"});

      // const beforeList = expences.data.filter( item => item.list === "before");
      // const afterList = expences.data.filter(item => item.list === "after");
      // const defaultCurrency = "rub"

      // let convertedBeforeList = convertCosts(beforeList, defaultCurrency);
      // let convertedAfterList = convertCosts(afterList, defaultCurrency)

      // setList({before: [...convertedBeforeList], after: [...convertedAfterList]});
      // setSum({before: sumItems(convertedBeforeList), after: sumItems(convertedAfterList)})

    } catch (error) {
      console.error("API Request error", error);
    }
  }

	useEffect(() => {fetchData()}, []);
  // useEffect(() => setSum({before: sumItems(list.before), after: sumItems(list.after)}), [list])

  console.log("LISTS STATE", lists);

  return <React.Fragment>
      <div className="flex flex-col p-0 m-0 h-full">
        <div className="order-last w-screen">
          <NewHeader />
        </div>
          
        
        <ListsGroup />

        <div className="order-first">
          <TableHeading />
        </div>
      </div>
  </React.Fragment>
}

export default App;
