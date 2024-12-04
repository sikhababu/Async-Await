const myPromise = new Promise ((resolve,reject)=>
    {
    const number = Math.floor (Math.random()*10);
    console.log(number);
    if (number<2) { 
        resolve('Operation Successfull')
    }
    else{
        reject('Operation Failed')
    }   
    })

    
    async function main() { 
        try{
            const result = await myPromise
            console.log (result)
        } 
        catch (error){
            console.log(error)
        }
    }
    main()
    