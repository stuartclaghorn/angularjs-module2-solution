(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var tobuy = this;

  // itemAdder.itemName = "";
  // itemAdder.itemQuantity = "";

  tobuy.items = ShoppingListCheckOffService.getToBuyItems();

  tobuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  // itemAdder.addItem = function () {
  //   ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  // }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyItems = [{name: "Cookies", quantity: 10}, {name: "Soda", quantity: 2},
                      {name: "Cups", quantity: 20}, {name: "Napkins", quantity: 20},
                      {name: "Pepto Bismol", quantity: 5}]
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    // var item = {
    //   name: tobuyItems[itemIndex].name,
    //   quantity: tobuyItems[itemIndex].quantity
    // };
    boughtItems.push(tobuyItems[itemIndex]);
    service.removeToBuyItem(itemIndex);
  };

  service.removeToBuyItem = function (itemIdx) {
    tobuyItems.splice(itemIdx, 1);
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.getToBuyItems = function () {
    return tobuyItems;
  };
}

})();
