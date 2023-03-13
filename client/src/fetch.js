

const prompt = "Make a recipe out of beef, beans, rice, lettuce, tomato. Respond with the JSON object only.";

// This prompt will be generate based on the user's input, but logic will need to wait until
// front end is developed. For now, we'll just use a hardcoded prompt.
// Prompt is passed to endpoint as req.body.prompt


// This is the first endpoint that will be called. It will generate a recipe based on the prompt
fetch('/api/generate/text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: prompt
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const recipe = JSON.parse(data.choices[0].message.content);
    console.log(recipe); // Do something with the recipe data
  
    // Fetch the image data for the recipe
    return fetch('/api/generate/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: recipe.name
      })
    });
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(imageData => {
    console.log(imageData); 
  })
  .catch(error => console.error(error));
  

/*
imageData returns as object with a url linking to the image:

{
  created: 1678671438,
  data: [
    {
      url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/
      org-hwmDxLCItFDd9WHG71x8tydb/user-7KW69lyihHrXWW7Kyl9mxKxY/img-y
      mm4iolJBSNjkgiCoLZm5u6s.png?st=2023-03-13T00%3A37%3A18Z&se=2023-
      03-13T02%3A37%3A18Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image
      /png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6d
      a-484e-a814-9c849652bcb3&skt=2023-03-12T06%3A32%3A34Z&ske=2023-03-
      13T06%3A32%3A34Z&sks=b&skv=2021-08-06&sig=UfrqrPMnwgNP3Nn9jtNfhflv
      LVoFKVjf53ls6gg9a9M%3D'
    }
  ]
}

*/


