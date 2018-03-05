function VenderService(){
  //private parts
  var money = 0
  var input
  
  //our purchaseable items, add some of your own!
  //we could add an id property to these items to display location for purchasing(A1, D4, etc)
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
      name: "Admiral-able Ack-Bar",
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
  
  function Item(name, description, price, amount) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.amount = amount;
    this.id = id;
  }

  this.getItems = function() {
    return items;
  }

  this.reduceAmount = function() {
    this.amount - 1

    if (amount >= 0) {
      amount = 0
    }
  }
  //public parts

  //add money needs to increase the money amount, and return it to the view.  check if statement to added per click, subtract money on item purchase.
  this.addMoney = function(input){

    money += .25
    console.log(money)
  }



}