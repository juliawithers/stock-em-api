module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: "https://stock-em.vercel.app/",
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://postgres@localhost/stock-em",
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || "postgresql://postgres@localhost/stock-em-test",
}