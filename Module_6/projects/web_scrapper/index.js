const fs = require("node:fs");

const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

/**
 * Algo :
 * 1. Open the page on which we have products to gather data -> axios (API Request -> http request to open the page)
 * 2. Find the title and price of the products on the web page (cheerio)
 * 3. Store the data into excel/json file
 */

// Step 1

const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.amazon.com/s?k=phone&page=2&crid=18EUYBSP7O1SQ&qid=1702535235&sprefix=phon%2Caps%2C280&ref=sr_pg_2"
  //     );
  //     console.log(response.data);
  //     fs.writeFile("amazondata.txt", response.data, (err) => {
  //       if (err) {
  //         console.log("ERROR WRITING DATA TO FILE", err);
  //         return;
  //       }
  //       console.log("FILE WRITTEN SUCCESSFULLY");
  //     });
  //   } catch (err) {
  //     console.log("ERROR", err);
  //   }

  const htmlData = fs.readFileSync("amazondata.txt", { encoding: "utf-8" });
  //   console.log(htmlData);

  // Step 2
  //   document.getElementsByClassName();

  const $ = cheerio.load(htmlData);
  //   // Find the div with id masterDiv
  //   $("div#masterDiv"); // document.querySelector("div#masterDiv");

  //   // Find the div with class product on it
  //   $("div.product");

  //   // Find all the headings h1
  //   $("h1");
  //   console.log($);

  const productData = [];

  const titles = $(".a-size-medium.a-color-base.a-text-normal"); // Product title
  titles.each((index, element) => {
    const title = $(element).text();
    productData.push({
      title: title,
    });
  });

  const prices = $(".a-price-whole"); // Product price
  prices.each((index, element) => {
    const price = $(element).text();
    productData[index]["price"] = price;
  });

  //   fs.writeFile("products.json", JSON.stringify(productData), (err) => {
  //     if (err) {
  //       console.log("ERROR WRITING JSON FILE", err);
  //       return;
  //     }
  //     console.log("DATA SAVED SUCCESSFULLY");
  //   });

  // Step 3

  /**
   * 1. Excel file (workbook)
   * 2. Sheet
   * 3. Columns
   * 4. Rows
   */

  const workbook = xlsx.utils.book_new();
  const sheet = xlsx.utils.json_to_sheet(productData);
  xlsx.utils.book_append_sheet(workbook, sheet, "Products");
  xlsx.writeFile(workbook,"Products.xlsx");
  
  console.log("Data saved in excel successfully");
};

fetchData();
