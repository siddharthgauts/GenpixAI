export async function GET(request:  Request){
    //connect to ms azure  function

    const response = await fetch('...',{
      cache:'no-store',
    })

    const textData = await response.text();

    return new Response (JSON.stringify(textData.trim()),{
        status:200,
    } );
}