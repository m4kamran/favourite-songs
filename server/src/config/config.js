module.exports = {
  port: process.env.PORT || 8080,
  db: {
    database: process.env.DB_NAME || 'favsongs',
    user: process.env.DB_USER || 'favsongs',
    password: process.env.DB_PASSWORD || 'favsongs',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './favsongs.sqlite'
    }
  }
}