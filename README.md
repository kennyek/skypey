# Skypey
> A Skype clone (sort of) made with React + Redux and TypeScript.

Made by following along the fourth chapter of [Understanding Redux
1](https://gumroad.com/l/Ocgbb) by Ohans Emmanuel. It shouldn't really be
interesting to other developers. It's for my personal experience.

## Installing / Getting started

To try the code, run from the terminal:

```shell
git clone https://github.com/kennyek/skypey.git
cd skypey
yarn install
yarn start
```

## Developing

### Built With

| Tool       | Version |
|------------|--------:|
| React      | ^16.4.1 |
| Redux      | ^4.0.0  |
| TypeScript | ^2.9.2 |

### Prerequisites

Either [npm][npm] or [yarn][yarn] is needed to install dependencies and start
the development server. [Git][git] is needed to clone and start the application.

### Setting up Dev

If you want to use this code to develop your own app, feel free to fork the
project. Then (substituting {username} and {project-name} with your correct
values) simply run  from a terminal:

```shell
git clone https://github.com/{username}/{project-name}.git
cd {project-name}
yarn install
yarn start
```

## Versioning

Initial release shall be v1.0.0.

Succeeding releases will use semantic versioning: MAJOR.MINOR.PATCH. A MAJOR
increment consists of backwards incompatible API changes. A MINOR increment
consists of added functionality in a backwards compatible manner. A PATCH
increment consists of backwards compatible bug fixes.

## Style guide

Organise code according to Redux's [three principles][redux-three-principles].

The root module of a folder should be named `index.ts` or similar, to ease up
imports. E.g. for an Example component:

```
.
└── components
    └── Example
        ├── index.tsx
        └── index.css
```

## Licensing

This project is [MIT licensed][mit].

[git]: https://git-scm.com/downloads
[mit]: LICENSE
[npm]: https://nodejs.org/en/download/
[redux-three-principles]: https://redux.js.org/introduction/three-principles
[yarn]: https://yarnpkg.com/lang/en/docs/install/
