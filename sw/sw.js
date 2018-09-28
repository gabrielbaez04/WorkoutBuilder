/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.js",
    "revision": "688d9aabd4c7b21c05dcb9104937206a"
  },
  {
    "url": "assets/images/home.jpg",
    "revision": "a36af18f36dcd2ccc4030e4b5b6146da"
  },
  {
    "url": "auth/api-auth.js",
    "revision": "70f32d68aa1f48fccd21fc5d71c60865"
  },
  {
    "url": "auth/auth-helper.js",
    "revision": "b605e2c370b0bfb116f10daaedc5d963"
  },
  {
    "url": "auth/PrivateRoute.js",
    "revision": "b07902e71df1a120091c0946a5deff34"
  },
  {
    "url": "auth/Signin.js",
    "revision": "3ce7f0ca3f787c83ff205fc9a1fc77cd"
  },
  {
    "url": "core/AuthMenu.js",
    "revision": "46373553ebeb8b1c9fbd7fb7674df3e5"
  },
  {
    "url": "core/Home.js",
    "revision": "e7f11030f0b58013bb78228d9439c558"
  },
  {
    "url": "core/Menu.css",
    "revision": "06f4ffc181adeab83803af57679803e6"
  },
  {
    "url": "core/Menu.js",
    "revision": "f2569b8055bbad8284aa02736af5715d"
  },
  {
    "url": "core/NotAuthMenu.js",
    "revision": "697914eaebd42696186f598c8e87d321"
  },
  {
    "url": "exercise/DeleteExercise.js",
    "revision": "f249bb69ecf6b636535bf87848dba5ec"
  },
  {
    "url": "exercise/Exercise.js",
    "revision": "c0286d6d5ebd46e85ca6fea6d35f04d2"
  },
  {
    "url": "exercise/ExerciseForm.js",
    "revision": "f6d831bb5d75c721c4b72aee9f67d72c"
  },
  {
    "url": "exercise/ExerciseInfo.js",
    "revision": "39133bb4aae9a6aa81c647679f94375d"
  },
  {
    "url": "exercise/ExerciseList.js",
    "revision": "dd01dcee280b25b76d797abca86452f9"
  },
  {
    "url": "exercise/ExerciseListItem.js",
    "revision": "2a14ce29fb9b670b4a3cc513c7584c15"
  },
  {
    "url": "main.js",
    "revision": "feaaa908d817793d07a515c38f6621e0"
  },
  {
    "url": "MainRouter.js",
    "revision": "8a0e5a6e40b115901ba9e3c76ad7eda0"
  },
  {
    "url": "user/api-user.js",
    "revision": "a019064ad41f262cf66511b91db1cb16"
  },
  {
    "url": "user/DeleteUser.js",
    "revision": "43736624806494408ae2ba341a8d0aeb"
  },
  {
    "url": "user/EditProfile.js",
    "revision": "7f019187c970083d32c7e6dc86c3a2bb"
  },
  {
    "url": "user/Profile.js",
    "revision": "bc0248ec091119de0ac32fe31dff4907"
  },
  {
    "url": "user/Signup.js",
    "revision": "c1060611d1726bf68b22210e37bed24f"
  },
  {
    "url": "workout/api-workout.js",
    "revision": "7d0964a925c36da206f419044e1fea59"
  },
  {
    "url": "workout/data.js",
    "revision": "978323c54101db1792985c1f0c20402d"
  },
  {
    "url": "workout/DeleteWorkout.js",
    "revision": "9c2afddab0547339d3f98dd64f245e69"
  },
  {
    "url": "workout/Workout.js",
    "revision": "36d0cfd2abf383588eff4bc616b74d50"
  },
  {
    "url": "workout/WorkoutForm.js",
    "revision": "a4e406689e8abc9e3d96474a36f4635e"
  },
  {
    "url": "workout/WorkoutList.js",
    "revision": "7aabe9948bafa537a8fb121c7a08061d"
  },
  {
    "url": "workout/WorkoutListItem.js",
    "revision": "b377faf4a87448425e4eaabe817e4736"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/wger.de\/api\/v2\/exercise\//, workbox.strategies.cacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
