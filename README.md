# Final_Project_Team2

A React Native starter repository for a team final project.

[Repository](https://github.com/MirzaAlbab/Final_Project_Team2)

## Features

- Android and iOS project scaffolding
- React Native sample screen in App.js
- Jest and ESLint scripts

## Technology

`react` 17.0.2 · `react-native` 0.68.2

## Getting started

Install Node.js and a React Native CLI development environment compatible with the version in `package.json`. Android requires a compatible JDK, Android SDK, and an emulator or connected device. iOS requires macOS, Xcode, and CocoaPods.

```bash
git clone https://github.com/MirzaAlbab/Final_Project_Team2.git
cd Final_Project_Team2
```

```bash
npm install
npm start
```

In another terminal, build Android:

```bash
npm run android
```

For iOS, install the pods under `ios/` first, then run `npm run ios`. If the project integrates Firebase, supply your own platform configuration and enable the authentication providers used by the app.

## Development and checks

```bash
npm test
npm run lint
```

## Project structure

- `__tests__/` — JavaScript test files
- `android/` — Android native project
- `ios/` — iOS native project

## Project notes

The reviewed App.js still renders the standard React Native sample screen. Product-specific features are not documented as implemented. React Native version: 0.68.2.

## License

No root `LICENSE` file was present in the reviewed repository. Consult the repository owner about reuse; dependencies and third-party assets retain their own terms.
