import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  api = new Shopify.API ({
    shop: "robin-41",
    api_key:"74e38279ff44ec2989aacb8512c0528b",
    password: "244d9ce7d2e4e20c621d8b3ff69c196b"
  });

var data = {
  "id": 4693106948,
  data:{
    "customer": {
      "id": 4693106948,
      "tags": "New Custom Search"
    }
  }
};
  var ret = api.modifyCustomer( data, function (err, data, header){
    /*
    console.log (err);
    console.log (data);
    console.log (header);
    */
});
//console.log (ret);
//console.log (api);
});
