function VenderService(){
 //money starts at 0
  var money = 0

  //items array, ID is used for the buy button and price/amount is checked against totals
  var items = [
    {
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45,
      id: "A1"
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20,
      id: "A2"
    },
    {
      name: "Admiral-able SnAck-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3,
      id: "A3"
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7,
      id: "A4"
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1,
      id: "A5"
    }
  ]
  
//creates a copy of the items array, parses it as a string and create an array copy
  this.getItems = function() {
    var itemsCopy = []
    for (let i = 0; i < items.length; i++) {
      var item = items[i]
      itemsCopy.push(JSON.parse(JSON.stringify(item)))
    }
    return itemsCopy;
  }

  //
  this.sellItem = function(id) {
  for (let i = 0; i < items.length; i++) {
    var item = items[i];
    if (id == item.id && money >= item.price && item.amount > 0) {
        item.amount--;
        money -= item.price;
        console.log(item, money)
      }

    }

  }

  this.getMoney = function() {
    var moneyCopy = {
      money: money
    }
    return moneyCopy;
  }

  this.addMoney = function(btnInput) {
    money += btnInput;

    console.log(money)
  }

}