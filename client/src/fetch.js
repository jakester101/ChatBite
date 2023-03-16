export async function fetchData(params) {
  const prompt = `Make a recipe out of ${params}. Respond with the JSON object only.`;

  try {
    const response = await fetch(`${window.location.origin}/api/generate/text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    let recipe;
    const jsonString = data.choices[0].message.content.match(/({[\s\S]*})/);

    if (jsonString) {
      recipe = JSON.parse(jsonString[0]);
      console.log(recipe);
    } else {
      alert(data.choices[0].message.content);
      console.log('No JSON object found');
      throw new Error('Prompt denied');
    }
    
    recipe.ingredients = params;
    localStorage.setItem('recipeData', JSON.stringify(recipe));

    const imageResponse = await fetch(`${window.location.origin}/api/generate/image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: recipe.name,
      }),
    });

    if (!imageResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const imageData = await imageResponse.json();
    console.log(imageData);
    localStorage.setItem('imageData', JSON.stringify(imageData));

    return { recipeData: recipe, imageData: imageData };
  } catch (error) {
    console.error(error);
  }
}











  /*------------------------------------------RESPONSE--------------------------------------------------*/
  /*-----------------------------------------------------------------------------------------------------/
  
    recipe data returns as object with the following properties:

    {
    name: 'Milk and Turkey Salad with Jello Topping',
    description: 'A refreshing take on a classic salad with the added sweetness of Jello. This salad includes fresh and nutritious ingredients, such as lettuce, tomato, turkey, and eggs. The jello adds a unique sweetness to the salad',
    instructions: '1. Start by boiling the turkey for around 20-30 minutes until cooked through. Then, cut the meat into small pieces.\n' +
      '2. While the turkey cooks, boil eggs for 10 minutes until hard-boiled. Let them cool in cold water and then peel and chop them into small pieces.\n' +
      '3. Wash and tear lettuce leaves into bite-sized pieces.\n' +
      '4. Cut tomatoes into bite-sized pieces.\n' +
      '5. Mix the turkey, chopped eggs, tomatoes, and lettuce together in a large mixing bowl.\n' +
      '6. Prepare the Jello according to package instructions and let it cool before adding it to the salad.\n' +
      '7. Once ready, pour the Jello over the combined salad ingredients and mix thoroughly in the bowl.\n' +
      '8. Chill in the refrigerator for a few hours before serving.',
    calorieCount: '350 calories per serving',
    prepTime: '1 hour'
  }


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

/------------------------------------------------------------------------------------------------------*/


export async function recipeList(){
      try {
    const response = await fetch(`${window.location.origin}/api/recipe/public`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function retreiveRecipe(id){
    try{
      const response = await fetch(`${window.location.origin}/api/recipe/query/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(!response.ok){
        throw new Error('Network response was no ok');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch(err){console.error(err);
    throw err;
  }
};