import mysql2 from 'mysql2'


const USER="root"
const PASSWORD=""
const DATABASE="Lend"
const HOST="localhost"
const dbConfig = {
    host: `${HOST}`,
    user: `${USER}`,
    password: `${PASSWORD}`,
    database: `${DATABASE}`,
  };


  const pool=mysql2.createPool(dbConfig)


  export default pool

