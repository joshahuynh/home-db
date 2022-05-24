const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'BootCamp1',
        database: 'homeDB'
    },
    console.log('Connected to the homeDB \n\n')
)

const startPrompt=()=>{
    inquirer.prompt([
        {
            type:'rawlist',
            name: 'home',
            message:"What do you want to do?",
            choices:[
                'View All Homes',
                'Add a Home',
                'Delete a Home',
                'Edit a Home',
                'Exit'
            ]
        }
    ])
    .then((res)=>{
                    (res.home=='View All Homes')?viewAllHomes()
                    :(res.home=='Add a Home')?addHome()
                    :(res.home=='Delete a Home')?deleteHome()
                    :(res.home=='Edit a Home')?editHome()
                    :console.log('Closing database...'), db.end
    })   
};

const viewAllHomes=()=>{
    const sql='SELECT * FROM home'
    db.query(sql,(err,res)=>{
        if(err)throw err;
        console.log("Viewing All Homes")
        console.table(res);
        startPrompt();
    });
};

const addHome=()=>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'address',
            message: 'What is home address?',
            validate: function(address){
                if (address){
                    return true;
                } console.log('Please enter an address!')
                return false;
            }
        },
        {
            type: 'input',
            name: 'renter',
            message: 'Who is the renter?',
            validate: function(renter){
                if (renter){
                    return true;
                } console.log('Please enter a renter!')
                return false;
            }
        },
        {
            type: 'input',
            name: 'rate',
            message: 'What is the rate? (Enter a number amount)',
            validate: function(rate){
                if (rate && isNaN(rate)==false){
                    return true;
                } console.log('Please enter a rate!')
                return false;
            }
        },
        {
            type: 'input',
            name: 'rentee',
            message: 'Who is the rentee?',
            validate: function(rentee){
                if (rentee){
                    return true;
                } console.log('Please enter a rentee!')
                return false;
            }
        }
    ])
    .then((res)=>{
        const sql = `INSERT INTO home (home_address,renter,rate,rentee) VALUES (?,?,?,?)`;
        const params = [res.address, res.renter, res.rate, res.rentee]
        db.query(sql,params,(err,result)=>{
            if (err) throw err
            console.log(`\nHome Added!\n`)
            viewAllHomes()
        });
    });
};

const deleteHome=()=>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'delete',
            message: 'What is the id of the home you would like to delete?',
        }
    ])
    .then((res)=>{
        const params = [res.delete]
        db.query('DELETE FROM home WHERE [id] = ?',params, (err,result)=>{
            if (err) throw err;
            console.log(`\nHome deleted!\n`)
            viewAllHomes();
        })
    })
};

startPrompt();