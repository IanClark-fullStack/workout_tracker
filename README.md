# workout_tracker
# workout_tracker
Create Mongo database with a Mongoose schema and handle routes with Express.

Features 
- Create workouts
- Track workouts
- Log multiple workouts within a one session

- Each workout provides the user with options to track the name of the workout, its type, number of sets as well as reps and the duration of time spent. When the workout is cardio, users will also be given the option to input distance. 




**Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.




Steps 
1. Page load: Create or Continue workout 
    - Create new workout plan: --> add new exercises
    - Continue workout plan: --> add new exercises 
    - View Workouts: --> Stats page: --> displays combined weights from past 7 workouts. 
    - View Workout: --> stats page: --> total duration from past 7 workouts.  



COMMITS 

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for the following two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills.

2. Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We want you to have well over 200 commits by graduation, so commit early and often!