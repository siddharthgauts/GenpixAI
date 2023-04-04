export async function GET(request: Request) {
    const response = await fetch(
      "https://ai-image-generate.azurewebsites.net/api/getimages",
      {
        cache: "no-store",
      }
    )
  
    const blob = await response.blob();
    const textData = await blob.text();
  
    const data = JSON.parse(textData);
  
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  }