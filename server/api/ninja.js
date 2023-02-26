export default defineEventHandler(async(event)=>{
    // handle query params
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    // return {
    //     message: `hello, ${name}! You are ${age} years old.`
    // }
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=HITcDGxAqpYLqmTY2FSFteSKDfcWTS6UO9fD8MPQ')
    return data
    // handle post data
})