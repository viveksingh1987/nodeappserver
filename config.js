const config = {
  app: {
    port: 3000,
  },
  db: {
    dbName: "watchlist",
    dbPort: 2701,
    dbURL:
      "mongodb+srv://admin:admin@cluster0.zlamx.mongodb.net/taskportal?retryWrites=true&w=majority",
  },
};

module.exports = config;
