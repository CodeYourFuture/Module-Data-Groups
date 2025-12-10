# Why modularize code?

Modularizing code means breaking a program into smaller, self-contained pieces (modules),
each responsible for a specific functionality. This approach offers several key advantages:

- Reusability – You can use the same code in different parts of a project or in other projects.
- Maintainability – It's easier to fix bugs or update features when code is organized into smaller parts.
- Separation of Concerns – Each part of the code handles a specific task, keeping things clear and organized.
- Team Collaboration – Multiple people can work on different modules at the same time without conflict.
- Scalability – You can add new features more easily as the project grows.
- Testing – Smaller modules are easier to test individually.
- Readability – Modular code is easier to read, understand, and navigate.

## How to break a program into smaller modules?

This is a relatively big topic and you will learn more about how to modularize a web app in the 
SDC course.

For starters, we recommend focusing on breaking a web app into the **non-UI part** and 
the **UI part**. Some of the advantages of doing so include:

1. Easier Testing
    - Non-UI code can be tested independently with unit tests.
    - You don't need browser environments or DOM simulations (e.g., `jsdom`) for testing logic.

2. Easier Collaboration
    - UI developers and business-logic developers can work more independently.
    - Clearer separation of concerns makes the codebase easier to maintain over time.

### The Non-UI Part of a Web App

This is the part of the app that works behind the scenes, without any user interface (UI).

It focuses on:
- ✅ How to represent data in the app
- ✅ What operations are needed to support data access and manipulation

### The UI Part of a Web App

This is the part of the app that interacts with the user interface (UI).

It focuses on:
- ✅ How to collect user input
- ✅ How to present data on the screen
- ✅ Calling functions in the non-UI part to process the data

### Dependencies

The UI parts can depend on the non-UI parts (e.g. call functions from the non-UI parts). But the non-UI parts should not depend on the UI parts.

### Example: The ToDo App
- The non-UI part is implemented in `todos.mjs`
- The UI part is implemented in `script.mjs`
  
Note: For a larger codebase, each part could be divided into multiple modules or files.