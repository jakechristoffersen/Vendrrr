function VenderController(){
    
    var venderService = new VenderService()

    //items is an array we need to get from the service and give to drawItems
    function drawItems() {
      //we will take in a paramter(items) and iterate over it to build
      //a template to draw to the screen.
      var items = venderService.getItems()
      var template = `
        <h3><small>A Nerdy Encapsulated Vending Machine</small></h3>        
        <table class="table">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Buy It</th>
          </tr>
        `;

    //iteration from items array
      for (let i = 0; i < items.length; i++) {
        var item = items[i];
          template += `
            <tr>
              <td id="name">${item.name}</td>
              <td id="desc">${item.description}</td>
              <td id="price">${item.price}</td>
              <td id="amount">${item.amount}</td>
              <td><button onclick="app.controllers.venderController.sellItem('${item.id}')" data-toggle="popover" data-container="body" title="All Outta Love..." data-content="...what AM I without YOU..." class="btn btn-default button-crcsml text-light">${item.id}</button></td>
            </tr>
          `;        
      }
      
//adds to table, get element from items
      template += "<table>"
      document.getElementById("items").innerHTML = template
  }

  //drawitems runs
    drawItems()

    //update function allows button clicks to refresh content on page
    function update() {
      var getMoney = venderService.getMoney();
      var getMoneyElem = document.getElementById("money");
      var moneyTemplate = '';
      
      moneyTemplate = `
        <h3>Coins: ${getMoney.money}</h3>
      `;
      getMoneyElem.innerHTML = moneyTemplate;
    }

    //addMoney comes with params from button, sends to service and runs update
  this.addMoney = function(m) {
    var btnInput = m; 
    venderService.addMoney(btnInput);
    update()  
  }

  //getmoney depricated
  // this.getMoney = function() {
  //   venderService.getMoney();
  // }

  //this take the params from iterated button on array and sends it to service, runs update and drawItems
  this.sellItem = function(id) {
    venderService.sellItem(id);
    update()
    drawItems()
  }

}