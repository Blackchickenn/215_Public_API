
async function getAPIs() {
    let response = await fetch('https://api.publicapis.org/entries')
    let data = await response.json()
    // console.log(data)
    return data
}

function getAPIHtml(myAPI) {
    return `
        <div class="my-api">
            <div class="my-api-name">
                <a href="${myAPI.Link}" targe="_blank">${myAPI.API} (${myAPI.Category})</a>
            </div>
            <div class="my-api-description">${myAPI.Description}</div>
            <div class="my-api-auth">Auth: ${myAPI.Auth ? myAPI.Auth : 'None'}</div>
            <div class="my-api-https">HTTPS?:${myAPI.HTTPS}</div>
        </div>
        `
}

function displayAPIs(myAPIs) {
        // console.log(myAPIs.entries[0])
        
        let sampleAPI = myAPIs.entries[0]
        myAPIs = myAPIs.entries
        document.body.innerHTML = `
        <div class="my-apis">
            ${myAPIs.map(getAPIHtml).join('')}
        </div>
        ` 
}

getAPIs()
    .then(displayAPIs)
    .catch(e => console.log(`Error: ${e}`))