const http = require("node:http");

const server = http.createServer((req, res) => {
  // Todo : Write code to handle requests and send response
  console.log("Request received", req.method);
  let data = [];

  if (req.url === "/todos") {
    if(req.method === "GET") {
        data = [
          {
            id: 1,
            title: "asdfasdf",
          },
          {
            id: 2,
            title: "xyasdja",
          },
        ];
    } else if (req.method === "POST") {
        data = [
            {
                message: "This api only supports GET method"
            }
        ]
    } else {
        // 
    }
  } else if (req.url === "/users") {
    data = [
      {
        id: 123,
        name: "Alex",
      },
      {
        id: 456,
        name: "Mike",
      },
    ];
  } else if (req.url === "/products") {
    data = [
      {
        id: 1,
        title: "Mobile phone",
      },
      {
        id: 2,
        title: "Laptop",
      },
    ];
  } else {
    res.statusCode = 404;
  }
//   console.log(res)

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(8080, () => console.log("Server is up and running at port 8080"));
