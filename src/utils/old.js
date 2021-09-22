
// #############################################################################################
// #############        AXIOS API CALLS    #####################################################
// #############################################################################################

// ############       POST        ##############################################################
// Using compound function to update local state and use axios to update BD on heroku
async function onAdd(newItem) {
    //save new item to the State
    setList( prevList => {
      return {...prevList, [newItem.list]: [...prevList[newItem.list], newItem]}
    });

    const message = document.querySelector(".overlay");
    const content = document.querySelector(".content-wrapper");
    content.classList.toggle("unfocused");
    message.innerHTML = "Saving new item to DB..."
    message.classList.toggle("hidden");
    content.classList.toggle("unfocused");

    //activate "Saving label"
    try {
      await axios
        .post('https://organizer-apps-api.herokuapp.com/expences', newItem)
        .then(response => {
          //Update Saving lavel and hide it
          message.classList.toggle("success");
          message.innerHTML = "Saved..."
          setTimeout( () => message.classList.toggle("hidden"), 2000);
          message.classList.toggle("success");
        });

    } catch (error) {
        console.error("Axios Post error", error, newItem);
        //show error on Saving label and possibly "retry" button
        message.innerHTML = "Error, the line has not been saved...";
        message.classList.toggle("alert");

        //    !!! Here may be the app should highlight input field to indicate that error was thrown and wait for retry
    }
  }

// ###########       DELETE        ##############################################################
// Using compound function to update local state and use axios to update BD on heroku
  async function onDelete(passedItem) {

    function filterArray(array, itemToDel) {
            return array.filter( item => item.id !== itemToDel.id)
          }

    setList( prevData => {
        return { before: filterArray(prevData["before"], passedItem),
                  after: filterArray(prevData["after"], passedItem) }
    })

    const message = document.querySelector(".overlay");
    const content = document.querySelector(".content-wrapper");
    content.classList.toggle("unfocused");
    message.innerHTML = "Deleting line from DB..."
    message.classList.toggle("hidden");

    try {
      await axios
        .delete(`https://organizer-apps-api.herokuapp.com/expences/${passedItem.id}`)
        .then(response => {
          message.classList.toggle("success");
          message.innerHTML = "Deleted..."
          setTimeout( () => message.classList.toggle("hidden"), 2000);
          message.classList.toggle("success");
        });

    } catch (error) {
      console.error("Axios Del error", error, passedItem);
      message.innerHTML = "Error, the line has not been deleted...";
      message.classList.toggle("alert");
    }
  }

// ###########       UPDATE        ##############################################################
// Using this func directly as event handler will be to complex due to 2 events that require update
  async function updateData(item) {

    const message = document.querySelector(".overlay");
    const content = document.querySelector(".content-wrapper");
    content.classList.toggle("unfocused");
    message.innerHTML = "Updating item in DB..."
    message.classList.toggle("hidden");

    try {
      await axios
        .put(`https://organizer-apps-api.herokuapp.com/expences/${item.id}`, item)
        .then(response => {
          //console.log("Axios update response: ", response);

          message.classList.toggle("success");
          message.innerHTML = "Updated..."
          setTimeout( () => message.classList.toggle("hidden"), 2000);
          message.classList.toggle("success");
        });

    } catch (error) {
        console.error("Axios Update error", error, item);

        message.innerHTML = "Error, the line has not been updated...";
        message.classList.toggle("alert");
    }
  }

// ################################################################################################
// ################################################################################################
  function onMove(passedItem) {
    const arrToDelType = passedItem.list === "before" ? "before" : "after";
    const arrToAddType = passedItem.list === "before" ? "after" : "before";
    const updatedItem = {...passedItem,
                            price: passedItem.price,
                            currency: passedItem.currency,
                            list: passedItem.list === "before" ? "after" : "before"
                        }

    setList( prevList => {
      const arrToDel = prevList[passedItem.list].filter( item => item.id !== passedItem.id);
      const arrToAdd = [...prevList[arrToAddType], updatedItem ]; //{ after: [] }

      return {[arrToDelType]: arrToDel, [arrToAddType]: arrToAdd};
    })

    //update 1 line of data
    updateData(updatedItem);

  }

// ########################################################
  function onHide(passedItem) {
    const updatedItem = {...passedItem, visible: !passedItem.visible}

      setList( prevList => {
        let updatedArray = prevList[passedItem.list].map( item =>
          item.id === passedItem.id
            ? updatedItem
            : item
        )

        return {...prevList, [passedItem.list]: updatedArray }
      });

      updateData(updatedItem)
  };

// ########################################################
  function onBookmark(passedItem) {
    const editedArray = passedItem.list === "before" ? "before" : "after";

    setList( prevList => {
        let updatedArray = prevList[passedItem.list].map( item =>
          item.id === passedItem.id ? {...item, important: !item.important}: item
        )

        return {...prevList, [editedArray]: updatedArray }
    });
  }

// ########################################################
  function switchCurrency() {
    setSettings(prevValue => settings.appCurrency === "cad"
      ? {...prevValue, appCurrency: "rub"}
      : {...prevValue, appCurrency: "cad"}
    );

    let convertedBeforeList = convertCosts(list.before);
    let convertedAfterList = convertCosts(list.after);
    setList({before: [...convertedBeforeList], after: [...convertedAfterList]});
  }

  function sumItems(array) {

    if(array) {
      let convertedArray = convertCosts(array);
      const temp = convertedArray.filter(item => item.visible === true);
      const temp2 = temp.reduce( (accum, item) => accum + item.price, 0)

      if(convertedArray[0].currency !== settings.appCurrency) {
        if(convertedArray[0].currency === "cad") {
          let temp3 = ((Math.round((temp2 * rateCadRub) * 100) / 100));
          return temp3;
        } else {
          let temp3 = ((Math.round((temp2 / rateCadRub) * 100) / 100));
          return temp3;
        }
      } else {
        return temp2;
      }

    } else {
      // console.log("Array seems like not ready: ", array)
    }

  }

