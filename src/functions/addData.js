const { createClient } = require("@astrajs/collections");

exports.handler = async function(event, context, callback){
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,

    });
    console.log(astraClient)
    const posts = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("posts")

}


// create an {astra_db} client


 