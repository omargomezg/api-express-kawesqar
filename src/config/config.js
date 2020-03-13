module.exports = {
    config: () => {
        return {
            user: 'admin',
            password: 'Kumple22*zu+',
            port: 1521,
            server: 'db-alerce.cw940nrosqfm.sa-east-1.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
            database: 'ccmvqa'
        }
    },
    key: () => {
        return {
            llave: 'miclaveultrasecreta123*'
        }
    }
}