export const saveCircuit = async (student_id, circuit_name, circuit_input, circuit_output_json) => {
    const url = "http://13.210.43.87:8000/api/save-circuit";
    var data = JSON.stringify({
        student_id: student_id,
        circuit_name: circuit_name,
        circuit_input: circuit_input,
        circuit_output_json: circuit_output_json
    });
    
    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });
    var status = await response.status;
    return status == "200";
    /*
    .then(response => {
    console.log(response)
    })
    .catch(err => {
    console.log(err);
    });
    */
}

export const register = async(student_id, is_admin, confirm_admin, first_name, last_name, email, password) => {
    const url = "http://13.210.43.87:8000/api/register";
    var data = JSON.stringify({
        student_id: student_id,
        is_admin: is_admin,
        confirm_admin: confirm_admin,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    });
    
    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });

    var status = await response.status;
    console.log('data:', data);
    console.log('status:', status);   
    return status == "201";
}

export const login = async(email, password) => {
    const url = "http://13.210.43.87:8000/api/login";
    var data = JSON.stringify({
        email: email,
        password: password
    });
    
    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });

    var status = await response.status;
    console.log('data:', data);
    console.log('status:', status);   
    return status == "200";
}

export const getResults = async (circuit_input) => {
    const url = "http://13.210.43.87:8000/api/calculate";
    //const url = "http://127.0.0.1:8000/api/calculate";
    var data = JSON.stringify({
        circuit_input: JSON.stringify(circuit_input)
    });

    var response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    let parsedData = await response.json();
    var status = await response.status;
    console.log('data:', data);
    console.log('parsedData:', parsedData);
    console.log('status:', status);
    if (status == "200")
        return parsedData;
    else
        return; // Handle error here
}

export const healthCheck = async () => {
    const url = "http://13.210.43.87:8000/api/";

    var response = await fetch(url, {
        method: 'GET'
    });

    var status = await response.status;
    console.log('health response:', response);
    console.log('health status:', status);
}

export const loadCircuit = async () => {
    const url = "http://13.239.134.106:8000/api/load-circuit"

    var response = await fetch(url, {
        method: 'GET'
    });

    var status = await response.status;
    console.log('health response: ', response);
    console.log('health status: ', status);
}