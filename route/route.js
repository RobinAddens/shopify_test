Router.route('/webhook', {name:'webhook', where: 'server',
  onBeforeAction: function () {
    Iron.Router.bodyParser.urlencoded({extended:true});
  },
  action: function () {
    var req = this.request;
    var res = this.response;
    var body = req.body;
    try {
      HTTP.get("https://robin-41.myshopify.com/admin/customer_saved_searches.json", {},
      function (err, response){
        var result = response.data;
        if (result.customer_saved_searches)
        {
          result.customer_saved_searches.forEach (function(item, index) {
            if (item.query == body.email)
            {
              /*
              var ordercount = api.countOrders();
              var update_json = { "customer": {"id":body.id, "tags": "saved search"}};
              var updated_result = HTTP.put("https://robin-41.myshopify.com/admin/customers/#"+body.id+".json",
                function (err, res) {
                  if (err)
                    console.log (err);
                  else
                    console.log (res);
                });
                */
            }
          });
        }
      });

    }catch (e) {
      console.log (e);
    }

    //console.log (req);
    res.end('received webhook\n');
  }
});
