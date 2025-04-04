const fetchData=async ()=>{
    const res = await fetch("../data.json"); 
    const jsoN= await res.json();
    return jsoN;
};



export { fetchData };