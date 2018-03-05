function VenderController(){
  //private parts
  var venderService = new VenderService()

  //items is an array we need to get from the service and give to drawItems
  function drawItems() {
    //we will take in a paramter(items) and iterate over it to build
    //a template to draw to the screen.
    var items = venderService.getItems()

    console.log(items)

    var template = `
    
    <h3>Vend that Machine</h3>

    
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Amount</th>
        <th>ID</th>
      </tr>
    `;

  
    for (let i = 0; i < items.length; i++) {
      var item = items[i];
      var itemAmount = item.amount;
      var itemPrice = item.price;
      console.log(itemAmount, itemPrice)

      template += `
      
      <tr>
        <td id="name">${item.name}</td>
        <td id="desc">${item.description}</td>
        <td id="price">${item.price}</td>
        <td id="amount">${item.amount}</td>
        <td>${item.amount}</td>
      </tr>

      `;
      
    }
    

    template += "<table>"

    document.getElementById("items").innerHTML = template


}

  drawItems()


  //public parts

  
  //we need a function to take money from our "view" and pass it to our service

  //params passed to service for each button click.  Get back total value and display
function addMoney() {
    
}


}