export async function getAllNames(url:string):Promise<Object>{

    const res = await fetch(url);

    const data = res.json();
    

    return data
}