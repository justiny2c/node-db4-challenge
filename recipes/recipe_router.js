const express = require('express');

const Recipes = require('./recipe_model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

// router.get('/:id/steps', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const steps = await Recipes.findSteps(id);

//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: 'Could not find steps for given recipe' })
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get steps' });
//   }
// });

// router.post('/', async (req, res) => {
//   const schemeData = req.body;

//   try {
//     const scheme = await Schemes.add(schemeData);
//     res.status(201).json(scheme);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to create new scheme' });
//   }
// });

// router.post('/:id/steps', async (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   try {
//     const scheme = await Schemes.findById(id);

//     if (scheme) {
//       const step = await Schemes.addStep(stepData, id);
//       res.status(201).json(step);
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to create new step' });
//   }
// });

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   try {
//     const scheme = await Schemes.findById(id);

//     if (scheme) {
//       const updatedScheme = await Schemes.update(changes, id);
//       res.json(updatedScheme);
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update scheme' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deleted = await Schemes.remove(id);

//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to delete scheme' });
//   }
// });

module.exports = router;