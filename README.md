# Departure Point

This repository contains a minimal example of a _babe experiment. It can be used as a quick-start departure point when programming a new _babe experiment from scratch.

## Online demo

You can have a look at the experiment [here](https://departure-point.netlify.com/) 

## How to set up an experiment with _babe (quick start quide)

### Obtaining the `departure point`

1. install npm by following these [instructions](https://www.npmjs.com/get-npm)
2. download or clone this github repository: https://github.com/babe-project/departure-point
   - e.g. type `git clone https://github.com/babe-project/departure-point.git`
3. change the folder name `departure-point` to whatever you like
   - let's say you call is `my-exp`, e.g. by typing `mv departure-point my-exp`
4. go to your folder `my-exp`, e.g., by typing `cd my-exp`
5. now type `npm install`; this will download the Javascript packages with the most current version of _babe
6. you can have a look at the example experiment by opening the file `index.html` now
7. you can now start editing to create your own experiment

### Changing the `departure point` to your own experiment

- Usually, you might just want to manipulate the following files:
	- `01_custom_functions.js` :: (optional) contains custom functions, variables and hooks (e.g. a global coin flip)
	- `02_custom_views_templates.js` :: (optional) contains user-defined special-purpose view templates (only needed, if the provided view templates are not enough for your experiment)
	- `03_trials.js` :: (optional) contains the data of different trials of a task (e.g., names of pictures, test sentences, questions, etc.)
	- `04_views.js` :: defines the different kinds of tasks, or, more generally, anything users will engage with on the screen
	- `05_main.js` :: contains the experiment structure and general information about deployment
- The numbering of the files is important, you can use the functions defined in `01` in `04`, but you can't use some variable from `05` in `02`

