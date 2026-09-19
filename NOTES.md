# Style guide

## Project structure

- **Libs**  
  Separate modules that contain primary system functionality and business logic.
  Generic, with minimal dependencies.

- **Src**  
  Everything for application bootstrapping. 
  Mostly contains presentation layer and library wiring.

  - **App**  
    Concrete GUI implementation coupled to libraries.

  - **Components**  
    Generic styled React components.

  - **Hooks**  
    Utility functions that handle presentation, local component state, side-effects.

  - **Stores**  
    Holds application state; because of the overhead and bloat, 
    keep here only things that *must be shared* between different windows.

- **Public**  
  Resources, vector and raster graphics, fonts, etc.

## Approach to development

Do not talk about features, diagnose problems to which there may be multiple solutions.

Approach:

-	**Describe** situation, write down complains/symptoms
-	**Diagnose** problems, unmet user objectives/causes
-	**Delimit** each problem, narrow the scope
-	**Direction**, strategy, approach to meet intentions/objectives (DM, UC)
-	**Design**, implementation plan (what matters in deciding)
-	**Develop** the solution.


## Tools

### Stories

Notes that capture observations, reflect the thinking process, diagnose and delimit problems.  
- Top: aggregate lower-level, concrete stories, track progress.
- Design: concrete stories each solving a single, narrow problem.


| title | description (symptoms) | problem (diagosis) | approach |
|-------|------------------------|--------------------|----------|

### UC: use-cases

- user intention/objective first (the "what")
- then possible implementations (the "how")

| problem                  | approach       | notes |
|--------------------------|----------------|-------|
| user intention/objective | implementation | ...   |
  

### DM: decision matrix
A shared table for refactoring of your understanding of the problem.

  - **problem**: what problem you are trying to solve
  - **approaches**: different ways to solve the problem
  - **criteria** for evaluation: goals, constrains or properties  
    (what matters in making the decision)
  - **aspects**: salient/relevant pros/cons, tradeoffs  
    (how the approach looks through the lens of a criterion,  
    without judging whether it's good or bad)
  - **colors**: a separate layer for subjective value.

  | problem / decision | current approach | another approach | notes |
  | -------------------|------------------|------------------|-------|
  | criterion          | aspect           | aspect           | ...   |
  
  
### Diagrams
Visual representation for architecture, flows, relationships, layouts etc.