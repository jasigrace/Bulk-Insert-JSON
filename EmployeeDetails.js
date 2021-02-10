const {Pool,Client}=require('pg')
const connectionString='postgressql://postgres:hello@localhost:5432/NOKIA PROJECT'

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from EmployeeDetails',(err,res)=>{
    console.log(err,res)
    client.end()
 })
