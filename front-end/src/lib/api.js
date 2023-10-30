const url = "http://localhost:4730"


async function getAllBooks(){
    const resp = await fetch(url+"/books")
    return resp.json()
}

export {getAllBooks}