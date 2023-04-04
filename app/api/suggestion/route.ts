

export async function GET(request:  Request){
    //connect to ms azure  function
    const response = await fetch(
      "https://ai-image-generate.azurewebsites.net/api/getchatgptsuggestion",
      {
        //mode: "no-cors",
        cache:"no-store",
      }
    );

    const textData = await response.text();

    return new Response (JSON.stringify(textData.trim()),{
        status:200,
    } );
}

