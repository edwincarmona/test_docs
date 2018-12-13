class Main {

    process() {
        var document = new Document(0, '2018-12-07', 589.26);

        var data =  JSON.stringify(document);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:9090/testapp/public/documents",
            "method": "GET",
            "headers": {
              "Content-Type": "application/json",
              "data": data,
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIxODEzMmU1ZGNhYWUxOTFmMGM2MDdmM2U1ODg0NmVhNjgxZjkxMGI3Y2VjZTJlYmMzOGE1Mzc5NDRmNTJmMDA4YWVkNWE0NjdhYzlkYmMzIn0.eyJhdWQiOiIxIiwianRpIjoiMjE4MTMyZTVkY2FhZTE5MWYwYzYwN2YzZTU4ODQ2ZWE2ODFmOTEwYjdjZWNlMmViYzM4YTUzNzk0NGY1MmYwMDhhZWQ1YTQ2N2FjOWRiYzMiLCJpYXQiOjE1NDQ0ODQ3MjUsIm5iZiI6MTU0NDQ4NDcyNSwiZXhwIjoxNTc2MDIwNzI1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.zU9fdXb7f4owFR6CP2X4Z2AYHBfVpiNsHXcHzQiKDQ8JF8_Egj5LZ7k95JpLV7wzZBtn2UZBVPkPxikIrLvxj7HI-mLG-9iLYqZmMXIcC6pogRWZqLwjDEfPq3K2ECXzmkymv56UOX_NS798yI7iVhQ35zO2gIPbTpX301T4ZJ0F3jHRCrsQzxxt1R0aZAiaJKrZlA1zqHOBbxlMl0XSY3w1pQTeFOsYXGDMz2PqiJzcvNM7NuxYahIJyJCh6MCP428HjWLYst1-KlQHGT14B2hMpX8WKPDN9zx3JAxX_cooZ1Ku_t8PDKcd8vC3kIyoI3FXj7zQcEDItFPMRZfxvWtdWDd_zH70HZD22Wezrwwym4nSI_cpht3tsq1l_xbAzTsvV7QCSvAmqbg4G3ZA8Vx-osyRtAi4HeYuUwHuQGA8FjUsMC_neUr8FqaCmpLPpml7WIvrYiXCSg-lgr4Z17G_kmdSqg7HGCAe82m3bpzfwBm0bHpMsTbPeUUaRX1VSPCYQl_Ovj6WPkNCkIgDUIAY-9C9M1h9P8BmpEV33JbPKiUSxxk_WP-gO0f5Ys_c6pZ_ibi_tQ0wJJaxqNVYSnXwrlTU6n2ST0UxD6McCnbuNMDLulCY33NxCwFOihsEg1w2oxYpRp3VqxpWbwPCrxxtd2D5HuzPfR6AImfNVEU",
              "cache-control": "no-cache",
              "Postman-Token": "8346ec59-601a-4dcc-90a4-1e66d01bbd21"
            },
            "processData": true,
          
        }
          
        $.ajax(settings).done(function (response) {
        console.log(response);
        });
    }

    thePost() {
        var form = new FormData();
			form.append("amount", "559.69");
			form.append("created_by_id", "2");
			form.append("updated_by_id", "2");
			form.append("dt_date", "2018-12-11");

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://localhost:9090/testapp/public/api/documents",
		  "method": "POST",
		  "headers": {
			"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiNzM3YTkzM2UwZmJhMTIzMTQwNjE5ZWU4N2ZhZjdmNDM3NmQ2NDM3ODdlYTkyMjY0MDhlMzA3ZjA2YzNjMzdiM2RkNGVlNmJhZDNhOWU1In0.eyJhdWQiOiIxIiwianRpIjoiOGI3MzdhOTMzZTBmYmExMjMxNDA2MTllZTg3ZmFmN2Y0Mzc2ZDY0Mzc4N2VhOTIyNjQwOGUzMDdmMDZjM2MzN2IzZGQ0ZWU2YmFkM2E5ZTUiLCJpYXQiOjE1NDQ1NDEzNDAsIm5iZiI6MTU0NDU0MTM0MCwiZXhwIjoxNTc2MDc3MzQwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.TC5m-wVTzsPMtSDShzQBGcZy9awjtI3bwn8og3ma6skLzrL1bIoSSZotrgF6G-l5E60wcXCP4m5yHBS2hyl0a9zw2ufCpI8VEDw7vmpLg0QaDYynqKRaDf8UkVMRJCBg0MyiVre3Wb_5kd9ASSZ1kglKrIOaZeQDoiT5GT2YyXuxPaOWKR7qOu74nV55Q1iZPcycom0J39zmY3sauHUT_MsNniE4Bl89NFas2wdbQuvy8BSm05_cOZSeziWa1tLcdtJt4bCr4fp-OTmOl8dDBdUSxtRhV1dxThiQYJuTKrThBeClshHT3DFgplrcZGIx8gyKGEj3-g7_O2Y8xkX02ThPWwePdQtO088PvrvtBUw1aHyz04G8YUC7xVTP5NVEKkewHBHPN56HlL_sHlzWJXhIsem73HRcRg214LV9kQWm-N2BE-tpJuo7JFaMf_kDFmd99o1RBd5KN8GG09fVRYLsaJ_4UJltXIuEgHlvhE2vtluq1H6zpLZEf1h2E7BuC_ryiub7heKmEVwb5bZzQN7-qs_PbqPbh-GBsfNFxINKnumRabi9R-ZoiFe39iRki661mzWJvXtDOkqfREha6c5TYB6OkW2I8zAoBf5zK5Uq-MXHIRJGpWKlcGSgcnsGD-M12M1sRA6IvMW3ciLGBRZ8kGvSc4m_sbvjX7rXRPQ",
			"cache-control": "no-cache",
			"Postman-Token": "eaf69e0f-46a6-4ac8-8260-b21a173701ab"
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": form
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		});
    
    }
	
	theJsonPost() {
		var document = new Document(0, '2018-12-13', 589.26);
		// document.rows[0] = new DocumentRow(0, 8963.58, 1, 0);
		// document.rows[1] = new DocumentRow(0, 2358.13, 1, 0);
		// document.rows[2] = new DocumentRow(0, 6914.75, 1, 0);

		var doc =  JSON.stringify(document);
		
		var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3ZGQwYzIwNzMwMzRhZTU4ZWIzNDA3YjZhMTNhYTVlNmI4ZDcxNWUzYWUzN2U3MGE0MGI2ZmRkZjY0NzNmZjNjY2QyODVlYzUzOWNjNjIxIn0.eyJhdWQiOiIxIiwianRpIjoiNTdkZDBjMjA3MzAzNGFlNThlYjM0MDdiNmExM2FhNWU2YjhkNzE1ZTNhZTM3ZTcwYTQwYjZmZGRmNjQ3M2ZmM2NjZDI4NWVjNTM5Y2M2MjEiLCJpYXQiOjE1NDQ3MTQ1NzksIm5iZiI6MTU0NDcxNDU3OSwiZXhwIjoxNTc2MjUwNTc5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.zPcJsUK1EUMQgyWSmEJw50o706SXu2Ml0PVDa7UEzVgV1bANn6cXkoZyZwkgYa2tzcTSLk6TTGdImnlWZr1k4JnhAw0yx8zimgGL3MM93x3KQAVs4WZgwej1Gr6qT9VazjzXuJ9qlvU1Xwra-WXM5Id2stt-XSug1PPZtSjPUBC4-GZ69fOjewDF161Vfjee-ht7Gtvw4DGHu8FUPgXPgJfGRjRBCxs0p-y1Ue-3ze_myWfpz6N-ifXSAe9t8j9RnR2I4xbMk5EfNb_ZsIbBWO0_z_XiayDZVbbp3teSZrVrqnYaf0cWhK7sEf_ATLT5HBp5yaNhUGEQZmQRWIE4uHGoPLEzvDsgiZ2UUFYVGbiyL2unB9rR3x3wHGvEl_-JD_3s94HLKy972W50T71wt50v2GeMFcsg46h2tr7IXzI_ccrItg-Uoyq78E8rok9jENhtGLNKJbt00Apbdd89aWcwRWmTFDuRqoabCIccBf3mBJjFhTBw7F63cb8DktLoGDOu6SRmhMiXhykV6p4u4MqrZFuKGjEU-D2nnxDJoCIt9-PznTkWZFeJE3WLvG4wBK0DC730COsZVzl5wK50k2xlDyMeUHx-61cmtlozA1EmhbLVL0cuLT-RDCTVXEyz5ghOlIlOooCwYkEfwQHL-YAEVdtcvu05Wwz9Rf2H7Cs";
		
		var settings = {
			  "async": true,
			  "crossDomain": true,
			  "url": "http://localhost:9090/testapp/public/api/documents",
			  "method": "POST",
			  "headers": {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token,
					"cache-control": "no-cache",
					"Postman-Token": "88fbcb08-a2c3-4270-bd0b-ecbfc3699c8e"
			  },
			  "processData": false,
			  "data": doc
		}

		$.ajax(settings)
			.done(function (response) {
				console.log(response);
			})
			.fail(function (response) {
				console.log(response);
			});
	}
}


var main = new Main();
//main.process();
//main.thePost();
main.theJsonPost();