const express = require("express");
const app = express();
app.use(express.json);
let initialRecipe = [];

// app.use(express.json());

// // GET route for base URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the recipe API');
// });

// // GET route for all recipes
// app.get('/recipe/all', (req, res) => {
//   res.json(initialRecipe);
// });

// // GET route for index.html
// app.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // GET route for add recipe form
// app.get('/add', (req, res) => {
//   res.sendFile(__dirname + '/recipe.html');
// });

// // POST route for adding new recipe
// app.post('/recipe/add', (req, res) => {
//   const newRecipe = req.body;
//   initialRecipe.push(newRecipe);
//   res.json(initialRecipe);
// });

// // Middleware for checking missing data
// app.use((req, res, next) => {
//   if (!req.body.name || !req.body.description || !req.body.preparationTime || !req.body.cookingTime || !req.body.imageUrl || !req.body.country || !req.body.veg) {
//     res.status(400).send('All fields are required');
//   } else {
//     next();
//   }
// });

// app.patch('/recipe/update/:id', (req, res) => {
//   const id = req.params.id;
//   const updatedRecipe = req.body;
//   const index = initialRecipe.findIndex(recipe => recipe.id === id);
//   if (index !== -1) {
//     initialRecipe[index] = updatedRecipe;
//     res.json(initialRecipe);
//   } else {
//     res.status(404).send('Recipe not found');
//   }
// });

// app.delete('/recipe/delete/:id', (req, res) => {
//   const id = req.params.id;
//   const index = initialRecipe.findIndex(recipe => recipe.id === parseInt(id));
//   if (index !== -1) {
//     initialRecipe.splice(index, 1);
//     res.json(initialRecipe);
//   } else {
//     res.status(404).send('Recipe not found');
//   }
// });


// app.get('/recipe/filter', (req, res) => {
//   const query = req.query;
//   const filteredRecipes = initialRecipe.filter(recipe => {
//     if (query.veg && recipe.veg !== query.veg) return false;
//     if (query.country && recipe.country !== query.country) return false;
//     if (query.sort === 'lth') return recipe.preparationTime <= recipe.cookingTime;
//     if (query.sort === 'htl') return recipe.preparationTime >= recipe.cookingTime;
//     return true;
//   });
//   res.json(filteredRecipes);
// })

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.get("/recipe/all", (req, res) => {
  res.send(initialRecipe);
});

app.post("/postRe", (req, res) => {
  let { name, description, preparationTime, cookingTime, imageUrl, country } =
    req.body;
  let data = {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
    id: Date.now(),
  };
  initialRecipe.push(data);
  res.send(data);
});

app.listen(8090, () => {
  console.log("Server is running on port 8090");
});
