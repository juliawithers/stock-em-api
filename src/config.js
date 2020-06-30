module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: "postgresql://postgres@localhost/stock-em",
    CLIENT_ORIGIN: "https://stock-em.vercel.app/"
    // DATABASE_URL: process.env.DATABASE_URL || "postgresql://postgres@localhost/stock-em",
}