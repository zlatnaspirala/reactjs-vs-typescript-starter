# About react-ts project #

 -This repository is for testing and learning purpose only.
 -Based on WebPack module bundler.
 -ReactJS is the entry point to the React library. If you load React from a <script> tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write :

```js 
  import React from 'react'
```

  If you use ES5 with npm, you can write : 

```js 
  var React = require('react').
```

## Install Project ##

 ### Install application dependences with : ###

 ```js
  npm install
 ```
### Run typescript compiler with : ###

```js
  npm run build
```

 -Project demo use webpack with full build based on main file dependency.<br/>
  - ![#f03cff](https://placehold.it/15/f03c15/000000?text=+) ` Main root file : index.tsx` .
  No communication between components without main class App from file: index.tsx!

  This comment tag in code "// Override func" means this function comes  (extends) from React.

<pre>
  build/  - Release - No edit in this folder (auto generated code).
  src/    - Source code , application start from index.ts

  src/components/  - Basic elements
  src/layout/      - Header,Footer,Body with own basic element child.
</pre>

## Structure of project ##

<pre>
project
│   README.md
│   webpack.config.js
│   tslint.json
│   package.json
│   package-lock.json
│   tsconfig.json
│   .gitignore 
│
└───build
│   │   bundle.js
│   │   index.html
│   └───css
│       └───global-style.css
│   
└───src
    │   index.html
    │   index.tsx
    └───components
    │   └───label
    │          label.tsx
    │          interface.ts
    │          style.ts
    │   └───textBox
    │          text-box.tsx
    │          interface.ts
    │          style.ts
    │   └───title
    └───css
          global-style.css
    └───globals
    │     events.ts
    │     global-inrterfaces.ts
    │     my-types.ts
    └───layout
    │       └───body
    │       └───header
    │       │      header.tsx
    │       │      interface.ts
    │       │      style.ts
    │       └───footer
    │              footer.tsx
    │              interface.ts
    │              style.ts
    └───services
             services.ts
</pre>

## Work Files description : ##

<pre>

src/index.tsx                              - Main (root) React class.Very important we start to build
                                             dependency start here.
src/index.html                             - No need edit here but it is possible to inject anything.
src/css/global-style.css                   - Main css file, native css, this css is automated adapted
                                             to the our web site.
components/[entity_name]/[entity_name].tsx - Defined Class
components/[entity_name]/interface.ts      - Define props (input param) and state object interface.
components/[entity_name]/style.ts          - Css (methodology : JS IN CSS).
src/globals/events.ts                      - Declares enumerator myEventsList only for now. 
src/globals/global-interfaces.ts           - Declare of namespace IApp. Any global based class/object
                                             can be defined in this file.
src/globals/my-types.ts                    - We can declare our custom complex (top level) types here.
src/services/services.ts                   - Common functions (Collect here every common staff)

</pre>

# Examples #

## 1) Adding new global class/file to the project dependency system : 

```js
  require("./css/global-style.css");
  require("./css/animator.css");
```

### Add css animation example : ###

Define animation like global in css/animator.css : 

```css
 @keyframes FadeSilver {
   from {background-color: black;}
   to {background-color: silver;}
 }
```

Add in any return style function : animationName, animationDuration etc...

```js
export function getBtnStyle(): IApp.MyMinimumCssInterface {
  return {
    justifyContent: "center",
    height: "60px",
    display: "grid",
    alignItems: "center",
    background: "silver",
    width: "100%",
    textAlign: "center",
    WebkitBoxShadow: "12px 12px 12px 0 rgba(0,0,0,0.2)",
    boxShadow: "12px 12px 12px 0 rgba(0,0,0,0.2)",
    onHover: "background-color: lime",
    WebkitAnimationName: "FadeSilver",
    WebkitAnimationDuration: "3s",
    animationName: "FadeSilver",
    animationDuration: "3s",
  } as IApp.MyMinimumCssInterface;
 }
 ```

## Adding new global BodySection to the body layout class : ##

 - Define name for new section and there events in events-enum.ts file.
 - We also need new menuActionEvents enumarator (communication header vs body).

```c#
  export enum menuActionEvents {
    showHome = "showHome",
    showAbout = "showAbout",
    showMyTableData = "showMyTableData",
  }

  export enum bodySections {
    home = "home",
    about = "about",
    myTableData = "myTableData",
  }
```

```diff
- We don't use literal/inline string intro code for common variables!
+ We define enumerators , services or global data structures etc..
```

  - When we define them intro global/events-enum.ts we can't miss or misstake.
  - In header we need new menu item, let's <b>create new menu element</b>:

```js
 // File : header.tsx
 const myKey3 = "table.programmers";
      const element3Args: IApp.NewElementArgsI = {
        key: myKey3,
        onClick: null,
        myStyle: null,
        content: "MY TABLE DATA",
        hoverIn: ((e) => this.hoverIn(e, myKey3)),
        hoverOut: ((e) => this.hoverOut(e, myKey3)),
      };

      this.add(element3Args);
 
      // hard coded , this is only fix for hover func
      const helper = [false, false, false];
```

### Also prepare and provide action : ###

```c#
// File : header.tsx
private clickMenuItem(event: MouseEvent | TouchEvent | any) {

// Also possible to call event.target.textContent !
// React store by him self key data to the -> event._targetInst.key
switch (event._targetInst.key) {
  case "header.home":
    this.props.provide({instruction: menuActionEvents.showHome});
    break;
  case "header.about":
    this.props.provide({instruction: menuActionEvents.showAbout});
    break;
  case "table.programmers":
    this.props.provide({instruction: menuActionEvents.showMyTableData });
    break;
  default:
    console.warn("No case for cleckMenuItem in bodyCOntent class!");

  }

}
```

   In reactJS we need support communication between classes.
   So we make new section in body class.
   For now we define section like private property of body class.
   In body class we use add function with deferent args. 

   ```c#
    // File : body.tsx, Class : Body
    // Adding new section
    private sectionMyTableData: AppI.SectionI = {
      name: bodySections.myTableData,
      elements: [],
    };

    // in constructor
    // setup state and add new section!
     super(args);
     this.state = {
       sections: [this.sectionHome, this.sectionAbout, this.sectionMyTableData],
       activeSection: bodySections.home,
     };
```

## Add element to the new section of body ( in progress, for now content is simple text in future will be table) : ##

```diff
- In body class we insert new element in section not direct in parent class.
- You can't edit or access this.state from outside of class
- You can't edit this.props in own class
```

 MyTableData is simple object imported from data-structures/text-data.ts and looks like : 

 ```js
  export let MyTableData: any[] = [
    { name: "Nikola Lukic", job: "game developer",
      address: "Serbia Nis", image: require("../assets/images/algoritam.png")},
      { name: "Miskica Milenkovic", job: "PHP developer",
      address: "Serbia Nis", image: require("../assets/images/algoritam.png")},
  ];
 ```

Because we read data from array access is easy and fast:

```js
   // Class Body
    MyTableData.forEach ( (item, index) => {

      const tableItem: AppI.NewElementArgsI = {
        key: "table.00" + index,
        onClick: null,
        myStyle: getMyTableItemWrapperStyle(),
        content: <div> <span>Name:{item.name} Job title: {item.job} </span>
          <img src={item.image} style={getMyTableItemWrapperStyle()} /> </div>,
        hoverIn: null,
        hoverOut: null,
      };

      this.add(tableItem, this.sectionMyTableData);
    });
```

  ### At the end add EventListener : ###

 This is enumerator : menuActionEvents.showMyTableData , 
 from global/event-enum.ts . In end point this enumerator
 represent string type value.

```c#
   // Class Body
  private addListeners() {
    ...
    (document as Document).addEventListener(menuActionEvents.showMyTableData, this.eventListener);
  }
```

-readme in progress...
