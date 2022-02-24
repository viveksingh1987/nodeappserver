const config = {
  app: {
    port: 3000,
  },
  db: {
    dbName: "watchlist",
    dbPort: 2701,
    dbURL:
      "mongodb+srv://<username>:<password>@cluster0.zlamx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = config;
