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
		document.rows[0] = new DocumentRow(0, 8963.58, 1, 0);
		document.rows[1] = new DocumentRow(0, 2358.13, 1, 0);
		document.rows[2] = new DocumentRow(0, 6914.75, 1, 0);

		var doc =  JSON.stringify(document);
		
		var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY5Y2IwZTc3MDYwNDUwYTZlNWM5OWQ2MTU3NjdiNmE1NGZlYjBmNGVkMjAwZDI0ZDAwYjM0YTkwODNmZTJlNDQ4NTlhZDQ3ZGM2MDRmM2NlIn0.eyJhdWQiOiIxIiwianRpIjoiZjljYjBlNzcwNjA0NTBhNmU1Yzk5ZDYxNTc2N2I2YTU0ZmViMGY0ZWQyMDBkMjRkMDBiMzRhOTA4M2ZlMmU0NDg1OWFkNDdkYzYwNGYzY2UiLCJpYXQiOjE1NDQ4MTUzODcsIm5iZiI6MTU0NDgxNTM4NywiZXhwIjoxNTc2MzUxMzg3LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.3NA4ppLl40FhmM5jCjMYd61fVxbSdL_p-F921wNKeBY4wmxKBsWzeqoYww3G5ZsWccbTcbtLE2fzp1oa1b6MHixg51cwFlxmCd2zqC8kboZD5javoOipdjOxCRFlhwufkMvpqkO0dhtLy-ZJs2-MEhsS-QrcnKFoh2RMt9ZsOIlKJl-z8CRMObXU6Hwtm6hk_9wMa3MDCjmPPc9PI1ykA5XQynbXMQQFOOun4L9kB_E4qn8g1BROCIdD3LFd-w8zrSghgMLGbP2gVSRwfBuaAjguQhc0wz5OmVJx6wRVs_BdnWykNizBm92tYT58kWZtnEsK1x0AdNZPub5Z8Bwhl_Zk1fBioqFdBpCFx8o1ioszbIFZsIdqcrp5PTAepvZH_69IYxd8JAQKIdOqzmSBalQws102SR1BlfQcpIvzsQW9YkYODUzeVpu8JD44KgaV-u4zZ5AG4XsnKeTHzGTb5pY-j7Sbc1gtZyiQa418sny1edHxE1PRHOzElOtqB0bNpc5zF9Qj5b89szjkG4cTLIp-G75m1wKlb3GAMrZW_87XiGBwaVAoM-jRrX_IFPo_zTf2hSJPsZkRhDQU6SMecn9zUqBGGh0L1Fi1qMtaXroSSdNyoIrP_HqQ8nC71L1REAyb8aVo1GXNTxWHSGXY5Hx_Coq6BbquCgG4D_n8_gw";
		
		var settings = {
			  "async": true,
			  "crossDomain": true,
			  "url": "http://localhost:9090/testapp/public/api/documents",
			  "method": "POST",
			  "headers": {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token,
					"cache-control": "no-cache",
					"req-origin": "Ajax"
					// "Postman-Token": "88fbcb08-a2c3-4270-bd0b-ecbfc3699c8e"
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