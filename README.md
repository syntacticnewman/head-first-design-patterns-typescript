# Head First Design Patterns (2nd Edition) in TypeScript

> 🚧 Work in Progress 🚧

This repository contains TypeScript implementations of the design patterns from the book Head First Design Patterns (2nd Edition). The goal is to provide clear and practical examples of each pattern in TypeScript, making it easier to understand and apply these concepts in modern JavaScript development.

## Introduction

Design patterns are proven solutions to common problems in software design. This project aims to bridge the gap between theoretical concepts and practical implementation by providing real-world examples in TypeScript.

## Project Structure

The project is organized by chapters and patterns:

```txt
.
│
├── src/
│   ├── chapter-01/
│   │   └── ...
│   ├── ...
│   └── chapter-12/
│       ├── adapter/
│       │   └── GooseAdapter.ts
│       ├── class/
│       │   ├── DuckCall.ts
│       │   ├── Goose.ts
│       │   ├── MallardDuck.ts
│       │   ├── RedheadDuck.ts
│       │   └── RubberDuck.ts
│       ├── ...
│       ├── decorator/
│       │   └── QuackCounter.ts
│       ├── interface/
│       │   └── Quackable.ts
│       └── simulator/
│           ├── DuckSimulator.ts
│           └── ...
├── package.json
└── README.md

```

## Setup

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/syntacticnewman/head-first-design-patterns-typescript.git

cd head-first-design-patterns-typescript

npm install
```

## Usage

You can run the examples using `ts-node`:

```sh
npx ts-node src/chapter-12/simulator/DuckSimulator
```

## Patterns Covered

- Chapter 12: Compound Patterns

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.
