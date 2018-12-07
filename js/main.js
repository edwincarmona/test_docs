class Main {

    process() {
        var document = new Document(0, '2018-12-07', 589.26);

        var array = new Array();
        array[0] = document;
        // array['_token'] = 'B2wu4XLW4BzLSQvrXmlenVFYv9Hj6ilAcZ8Zhv0m';

        var req = JSON.stringify(array);

        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "http://localhost:9090/testapp/public/documents?_token=B2wu4XLW4BzLSQvrXmlenVFYv9Hj6ilAcZ8Zhv0m",
        //     "method": "POST",
        //     "dataType": "json",
        //     "data": "req",
        //     "headers": {
        //       "cache-control": "no-cache"
        //     }
        //   }
          
        //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:9090/testapp/public/documents?_token=B2wu4XLW4BzLSQvrXmlenVFYv9Hj6ilAcZ8Zhv0m",
            "method": "GET",
            "headers": {
              "cache-control": "no-cache",
              "Postman-Token": "892d680b-1f8d-4208-83ee-e9c3e81039e1"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }
}

var main = new Main();
main.process();