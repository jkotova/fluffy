const BASE_URL = 'https://api.tikhonov.im';

export const URLS = {
    register: '/register',
    login: '/login',
}

export const getUrl = {
    register: (email, password) => `${URLS.register}?email=${email}&password=${password}`,
    login: (email, password) => `${URLS.login}?email=${email}&password=${password}`
}

export async function apiFetch(data, token) {
    const url = BASE_URL + data.requestUrl;
    console.log('data: ', data);

    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: data.method,
        body: data.body ? data.body : false,
    });

    console.log('response: ', response);

    if (response.ok) {
        const responseText = await response.text();
        console.log('responseText: ', responseText);
        try {
            const responseParsedJson = JSON.parse(responseText);
            console.log('responseParsedJson: ', responseParsedJson);
            return responseParsedJson;
        }
        catch (error) {
            return responseText;
        }
    }
    else {
        // logging errors
        console.log('data: ', data);
        const responseText = await response.text();
        console.log('response: ', response);
        console.log('response.text: ', responseText);
        console.log('response.message: ', response.message);
        console.log('response.status: ', response.status);
        try {
            const responseParsedJson = JSON.parse(responseText);
            console.log('decoded answer: ', responseParsedJson);
            alert(`${responseParsedJson.message}`);
        }
        catch (error) {
            console.log('answer failed to decode');
            alert(`${responseText}`);
        }
        throw new Error('Response not ok');
    }
}
