const config = {
  app: {
    port: 3000,
  },
  db: {
    dbName: "watchlist",
    dbPort: 2701,
    dbURL:
      "mongodb://localhost:27017/local",
  },
};

module.exports = config;
