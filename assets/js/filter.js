const contains = (data,query)=>{

    const filtered = [];

    data.forEach(d=>{
        if(d.API.toLowerCase().includes(query)){
            filtered.push(d);
        }
    })
    return filtered;
}
module.exports = contains;