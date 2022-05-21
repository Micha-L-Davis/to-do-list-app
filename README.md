# ***To Do List App***

---------------------------------

## Web Application

A simple app to track to-do tasks.

The app demonstrates the use of React *context* to pass global configuration settings directly to component consumers who need the information. Each task can be assigned to a person, given a description and a difficulty rating. Tasks can be marked as completed and optionally hidden from view. Tasks appear in the order entered, and display options control how many tasks appear on any given page of the task display. The app features basic and bearer Auth middleware and an Access Control List to allow users to securely store their lists. The project could easily be tied to a database to increase functionality.

---------------------------------

## Tools Used

Microsoft Visual Studio

- React
- Redux

---------------------------------

## Getting Started

Clone this repository to your local machine.

```
git clone https://github.com/to-do-list-app/to-do-list-app.git
```

Once downloaded, you can either use the dotnet CLI utilities or Visual Studio 2017 (or greater) to build the web application.

```
cd ./to-do-list-app
`npm i`
```

Install all dependencies needed for the project.

```
cd ./to-do-list-app
npm start
```

---------------------------------

## Usage

1. Task data into form provided.
2. Press the submit button.

Results will appear in the window below the form. The options form updates results live. Results are paginated, with pages navigable by next and previous buttons.

---------------------------

# Site Model

![](/assets/diagram.png)

---------------------------

## Author

Micha Davis

------------------------------
