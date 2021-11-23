# Fitness Tracker

Application to help keep track of your workouts and exercises. Save workouts, add exercises, be as specific as you would like!

Built using Express Servers, Mongo Database and Mongoose. 

## Installation 
--- 


## Usage 
--- 

Application Features 
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
