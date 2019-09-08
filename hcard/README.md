## Code Structure
To make this project more scalable, flexible and can be gracefully modified when needed, 
I decompose the structure into 4 level(from top to bottom): `Application`, `Pages`, `Views`, `Components`.

#### Application
App.js use functional component since it does not contain complex logic. Use `View` and `initialState`
to control the View of next level components (Hcard and Preview). use Callback function `getValues()`
to get the data of form from `<Hcard/>`. Use css grid for the 2 columns layout and responsively change
to 1 column layout when media width is less than 800px.

#### Pages
Including Class Component `<Hcard/>` and Functional Component `<Preview>`. For `<Hcard/>`, use `renderColumnView()`
and `renderForm()` to dynamic render the view(`Views` and `Components` level) according to the data `View`  and `initialState` received from the
previous level. Use `getAvator()` to get the avator image. `<Priview/>` will received the 
updated data from  `<Hcard/>` and render the preview UI

#### Views
`<UploadMedia/>`--- a modal include upload media function(dropzone) and crop image function. implemented by `react-dropzone` and `react-image-crop`
, and the UI render by the next level elements(`Components`)

#### Components
`Button` `DropZone` `Textfield` are the basic element for the UI, use stateless
Function Component to make it easier to modify or replace.


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

