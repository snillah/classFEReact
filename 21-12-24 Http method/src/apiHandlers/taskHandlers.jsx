const API ="https://67664c93410f849996574a4b.mockapi.io/"

const headers={
    "content-Type":"application/json",
}

const endPoints = {
    list :"/tasklist",
}
export async function getAllTaskList(){
    let resposne = await fetch(API,{
        method:'GET',
    });
    let listData = await resposne.json();
    return listData;
}

export async function addTask(payload){
    let resposne = await fetch(`${API}${endPoints.list}`,{
        method:'POST',
        body:JSON.stringify(payload),
        headers,
    });
    let getIdData = await resposne.json();
    return getIdData;
}

export async function getTask(id){
    let resposne = await fetch(`${API}/${id}`,{
        method:'GET',
    });
    let getIdData = await resposne.json();
    return getIdData;
}

export async function editTask(id,payload){
    let response = await fetch(`${API}${endPoints}/${id}`,{method:"PUT",body:JSON.stringify(payload),headers})

    let editData = await response.json();
    return editData
}

export async function deleteTask(id){
    let resposne = await fetch(`${API}/${id}`,{
        method:'DELETE',
    });
    let deleteData = await resposne.json();
    return deleteData;
}


