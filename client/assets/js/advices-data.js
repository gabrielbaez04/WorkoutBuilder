var advices = [
    {
        title:'Make sure you\'re eating healthy.',
        body: 'Ask almost any personal trainer and they’ll tell you that regardless of your training goals, healthy eating is the backbone. Food is what fuels your body to reach your goals, and without proper nutrition through quality foods, you’re likely to stall. Maintain a balanced diet consisting of fruits, vegetables, complex carbohydrates, complete proteins, and healthy fats like fish oils and flaxseeds.',
        imageId: 0
    },
    {
        title:'Prepare ahead.',
        body: 'Preparing meals in advance gives you the best chance to accomplish your nutrition goals, says Micah LaCerte, a personal trainer and fitness competition world champion. That way, he says, you won’t feel pressured to eat unhealthy foods or skip meals.',
        imageId: 1
    },
    {
        title:'Eat more clean food.',
        body: 'Eating only three daily meals? Not a great idea. “Half the people I deal with aren’t losing weight because they don’t eat enough,” says veteran personal trainer Mike Duffy. Duffy advises his clients “to eat five times a day, about every three hours, to stimulate their metabolism” including two mini-meals between three basic meals. With activity levels decreasing throughout the day, he advises to “eat less as the day goes on.”',
        imageId: 2
    },
    {
        title:'Control your portion sizes.',
        body: 'You’ll be eating more often, so paying attention to portions is extremely important. “Make sure chicken breasts, (and) meats, are no larger than your palm, and that pastas are no larger than your fists,” says Jay Cardiello, a personal trainer to countless celebrities and professional athletes. He also suggests using “smaller bowls, plates, and cups” because studies show people “serve themselves 20-40% more food when they’re using larger plates.”',
        imageId: 3
    },
    {
        title:'Eat with purpose',
        body: 'Everything you consume should have substantial nutritional value. “You want the most nutritional bang for your buck,” says Dan Trink, C.S.C.S., a strength coach and trainer. “Everything you eat should serve some sort of nutritional purpose in your body, fuel your workouts, and (be) geared toward optimizing your body.”',
        imageId: 4
    },
    {
        title:'Understand the basics of building muscle.',
        body: 'Talk to any personal trainer and they’ll tell you there are certain muscle-building basics. First, increase your caloric and complete protein intake, so your body has enough building blocks to get bigger. Then, when you enter the gym, focus on your form. Perform compound movements and train with weights on average around four times a week. Never underestimate the importance of rest.',
        imageId: 5
    },
    {
        title:'Work your full range of motion.',
        body: 'Don’t take any shortcuts. “Aim for the largest range of motion you can achieve in your exercises,” says Lee Boyce, C.P.T. “Your muscles will do more work per rep, and it will result in your breaking down more tissue by the end of the workout.”',
        imageId: 6
    },
    {
        title:'Don’t go too heavy.',
        body: 'Wondering how to get the most out of lifting weights? “Use a weight that will have you failing on the set between the 30- and 40-second mark,” Duffy says. Time under tension causes muscle to grow. “If you’re failing at 20 seconds, you know that weight was too heavy.”',
        imageId: 7
    },
    {
        title:'Carefully consider cardio.',
        body: 'If getting huge is your goal, then throttle back on your cardio workouts, says LaCerte—chances are, you’ll be burning far too many calories. So what should you do if you still want to get in some cardio? LaCerte says “a light jog a few days per week for 20 minutes is adequate.” If you’re aiming to burn fat, of course, then focus on getting enough protein every day (usually one gram of protein per pound of ideal body weight), while still keeping your overall caloric intake low.',
        imageId: 8
    },
    {
        title:'Choose supplements intelligently.',
        body: 'Some trainers and lifters feel supplements can play a key role in boosting muscle gains. If you subscribe to that theory, then chances are, you’re already taking protein supplements—but what else? Creatine, for one, “seems to be about the most effective strength- and size-building supplement,” Trink says. To boost your performance, you may also want to try peppermint. Cardiello explains that the scent “alters the perception of how hard you’re working out,” making it seem “less strenuous, slower-paced, and easier to complete.”',
        imageId: 9
    },
    {
        title:'Prepare yourself for endurance training.',
        body: 'When it comes to training for endurance, you’ll need to be hydrated and be sure you’re eating properly because, by its very nature, this form of training is very demanding on your body. You should be doing a good mix of cardio and weight training. And, to increase your aerobic capacity, you should incorporate high-intensity interval training, or HIIT. You’ll likely be sweating buckets and burning calories galore, so be prepared.',
        imageId: 10
    },
    {
        title:'Heart rate monitor.',
        body: 'If you already own a heart rate monitor or fitness tracker, then this is a good time to start using it. If not, you may want to either go out and buy one, or learn how to do it yourself. “Don’t just exercise for a set amount of time and call it quits,” Duffy says. “You need to bring the intensity with it, and a fitness tracker can help you get a sense of exactly how hard your heart is working.”',
        imageId: 11
    },
    {
        title:'Exhaust for endurance.',
        body: 'To further your endurance training, you need to put in total effort. “You’re going for muscle exhaustion, so remember to fully exhaust the muscles,” Boyce says. How can you do that? Boyce suggests that you “get good at the bodyweight staples—pullups, chinups, pushups, inverted rows, (and) squats. If you can master these movements for high reps, your muscles will get well-conditioned.”',
        imageId: 12
    },
    {
        title:'Consider reducing rest time.',
        body: 'It’s always tempting to take a break when training, but LaCerte advises that you should “stick with rest times of 30 to 45 seconds between sets, because this will help increase your overall endurance. If you are strength training, lift moderate to heavy weight and keep your rep range between 8–15 reps. If you’re running, mix low-intensity, steady-state cardio with sprinting.”',
        imageId: 13
    },
    {
        title:'Learn how to fight fatigue.',
        body: 'Fatigue may be your biggest enemy when endurance training, but there are some ways to combat it. First, drink beet juice, which is packed with healthy nitrates that can improve your cardiovascular functioning. “Beets can actually increase stamina by up to 16%, and it helps your muscles produce more energy, more efficiently, making exercise less exhausting,” Boyce says. Another way to boost your performance is by carefully selecting your music. “When people listen to favorable music their blood vessels expanded 26%,” according to a study, Boyce says.',
        imageId: 14
    },
    {
        title:'Understand strength-training basics.',
        body: 'If you want to build strength, you have to set goals and be patient. As you’re starting off, it’s important to be consistent and stick with your plan. When you’re in the gym, don’t get distracted. Stay focused on the task at hand. When you leave the gym, make sure you get proper rest and keep track of your progress. If you stay determined, your goals can be accomplished.',
        imageId: 15
    },
    {
        title:'Find your motivation.',
        body: 'Motivation is key. Some good ways to stay motivated while you’re working out: Count down, not up, when performing reps. Another trick: “Look at your dominant hand while you’re pushing up,” Cardiello explains—it “automatically includes a positive reinforcement” because the dominant hand more easily and quickly moves the weight.',
        imageId: 16
    },
    {
        title:'Carefully focus on form.',
        body: 'When strength training, you’ll be putting your body through very strenuous activity, so it’s important to maintain proper form. By maintaining proper form, “you’re guaranteed to activate the muscle groups that you are looking to train and, most important, you’ll stay healthy and injury-free,” Trink says. “The guy who can stay healthiest can train the most, and, in the long run, make the most progress.”',
        imageId: 17
    },
    {
        title:'Be mindful of the little things.',
        body: 'Ever notice how a bunch of seemingly insignificant things can make all the difference? Strength training is no different. When you’re strength training, you have to “pay attention to the little things, because you’re only as strong as your weakest link,” Boyce says. “If you notice a deficiency, address it in conjunction with your program.”',
        imageId: 18
    },
    {
        title:'Change helps.',
        body: 'If you want to make progress, sometimes you have to change things up. “Ensure your body never gets adapted to what’s coming next,” LaCerte explains. Once that happens, you may notice diminishing strength gain results. To avoid this possibility, “switch up how heavy you’re lifting, your tempo of an exercise, your rep/set count, or what time of the day you’re lifting,” he says.',
        imageId: 19
    },
    {
        title:'Understand the basics of fat loss.',
        body: 'Forget calorie counting, and start thinking of food as fuel for your body. Getting six-pack abs is usually a function of fat loss, not a lack of muscle definition—and burning fat all boils down to a simple equation: Calories in versus calories burned. That means going beyond calories and studying your macronutrient intake—fats, protein, and carbs—to understand how much you consume relative to how much you burn during a workout.',
        imageId: 20
    },
    {
        title:'Take photographic evidence.',
        body: 'Can’t get the scale to budge? It’s possible you’re gaining muscle and shedding body fat—and that means your net weight change will seem “stuck,” even though you’re making progress. “Take pictures on a weekly basis—front, back, (and) side pictures all from the same angle, same lighting, same clothing.” That way, you’ll see change over time, even though it may not look like it day to day.',
        imageId: 21
    },
    {
        title:'Understand how to use carbs.',
        body: 'Say it with us: Carbs are not the enemy. Unless you’re on an extreme nutrition plan like the keto diet, carbs are an essential source of your body’s energy. That said, you need to be mindful about how you consume those carbs, because eating too many carbs—or eating carbs at the wrong times—can cause your body to store the excess energy as fat. Here’s how to eat carbs for more muscle and less fat.',
        imageId: 22
    },
    {
        title:'Attack your lower body to burn fat.',
        body: 'To flatten your belly, “go below your navel,” Cardiello says. “In a Syracuse University study, people burned more calories the day after they did a lower-body resistance training exercise than after they worked their upper bodies, simply because legs have more mass.” Here’s our roster of lower-body workouts on Men’s Fitness.',
        imageId: 23
    },
    {
        title:'Hydrate properly.',
        body: 'An often-overlooked factor, and one stressed by Trink, is to make “sure that your GI tract is healthy, because that’s how you absorb all your nutrients.” Do so by consuming vitamins, fiber, minerals, a probiotic, and water. Cardiello suggests you drink “ice cold water first thing in the morning” adding “you’ll naturally boost your metabolism by up to 24% for 90 minutes.” LaCerte recommends you “drink at least one gallon of water per day.”',
        imageId: 24
    },
    {
        title:'Weight loss trick: Wait out the urge to have seconds.',
        body: 'We’ve all polished off a delicious meal, immediately gone back for seconds, then realized too late that we’re uncomfortably stuffed. That’s because it takes up to 20 minutes for your brain to register that you’re full, says nutritionist Wesley Delbridge, of the Academy of Nutrition and Dietetics. “Before having another helping, wait 10 to 20 minutes and drink a glass of water,” he says. “If you’re still hungry after that, then have a smaller second serving.” Chances are, though, you’ll realize you don’t actually want more.',
        imageId: 25
    },
    {
        title:'Weight loss trick: Cut up your food.',
        body: 'Whether you’re eating a sirloin, salmon fillet, bagel, or omelet, try cutting your food into small pieces before taking a single bite. In a recent Arizona State University study, participants given a cut-up bagel ate less of it than those handed an intact bagel. They also consumed less food at a free lunch served 20 minutes later. The researchers say pre-cutting food makes each bite more satisfying, thereby helping with portion control.',
        imageId: 26
    },
    {
        title:'Weight loss trick: Brush or floss after meals',
        body: 'Once you’ve finished lunch or dinner, bust out the toothbrush or dental floss, suggests nutritionist Heather Mangieri, owner of Nutrition CheckUp in Pittsburgh. When your teeth feel clean and your breath is minty, you’ll be less apt to nibble mindlessly.',
        imageId: 27
    },
    {
        title:'Weight loss trick: Stick with wrapped candy.',
        body: 'If you’re going to cave to a candy craving (hey, it happens), pick up some Starburst, Jolly Ranchers, or another kind that comes in a wrapper. You’ll probably eat less than if you’d chosen wrapper-less candy like Skittles or Twizzlers Nibs. A Swiss study found that people who were told to take freely from a bowl of wrapped candy ate just three pieces on average while those offered unwrapped sweets gobbled down five. The tiny effort required to unwrap something can be enough to slow you down and deter you from taking more.',
        imageId: 28
    },
    {
        title:'Weight loss trick: Master chopsticks.',
        body: 'If you’ve never quite figured out how to use chopsticks, now’s the time to learn. They require more dexterity and precision than a fork, forcing you to slow down. This is especially helpful for big noodle bowls and rice dishes, which are really easy to overeat. But chopsticks aren’t limited to Asian cuisine. Try using them for baked fish, sautéed veggies, or even a green salad.',
        imageId: 29
    },
    {
        title:'Weight loss trick: Close your kitchen.',
        body: '“Setting boundaries around when you’re allowed to eat can help you stay focused on your goals,” Mangieri says. “For example, make a rule that your kitchen ‘closes’ at 7 p.m. so you’re not tempted to eat late at night.”',
        imageId: 30
    },
    {
        title:'Weight loss trick: Sit at the end of the table.',
        body: 'At family-style dinner parties or when dining out with a group, grab a seat at the end of the table. Sure, the middle might be where the action is, but it’s also where the appetizers, bread bowl, and main entrées are placed. Sitting on an end will make it tougher for you to mindlessly scoop seconds onto your plate.',
        imageId: 31
    },
    {
        title:'Weight loss trick: Keep infused water in the fridge.',
        body: 'To help you kick a soda or juice habit, keep a clear pitcher of filtered water infused with cucumbers, lemons, strawberries, basil, or mint in your fridge at all times. It’ll look fresh and tasty, encouraging you to pour a glassful, and offer a subtle flavor that’s more exciting than plain water—but not full of calories.',
        imageId: 32
    },
    {
        title:'Weight loss trick: Ditch diet soda.',
        body: 'Here’s yet another reason to quit diet soda: Although diet soda drinkers consume fewer total calories per day than people who drink sugary sodas or booze, a greater percentage of their daily calories comes from nutrient-void junk food Opens a New Window. . It’s unclear whether that’s because diet soda fans think they can afford more calories Opens a New Window.  so they make worse food choices or because artificially sweetened beverages trigger cravings for high-sugar, high-fat, and high-sodium foods. Either way, though, ditching diet soda may be a secret trick to eating less garbage.',
        imageId: 33
    },
    {
        title:'Weight loss trick: Spice it up.',
        body: 'Make a point to use more chili peppers and other spices in your cooking—in homemade soups, salad dressings, meat marinades, and even breakfast scrambles. Along with potentially lowering your risk of heart disease and cancer, spicy foods may help you lose weight Opens a New Window. . The secret weapon is capsaicin, the compound that gives peppers their spice. There’s some evidence Opens a New Window.  that it activates the same brain receptors that tell you you’re full, leading you to eat less. Capsaicin also may prompt your body to turn jiggly white fat into energy-burning brown fat.',
        imageId: 35
    },
    {
        title:'Weight loss trick: Don’t have sweets around.',
        body: '“Willpower rarely works when you can satisfy an unhealthy food craving just by walking over to the refrigerator or cupboard,” Mangieri says. You can’t eat what isn’t there, so you’re better off not having tempting treats lying around. “Make it so if you really want a treat, you’ll have to get in your car and drive to get it,” she adds. “Oftentimes, that effort is enough to keep you from caving.”',
        imageId: 36
    },
    {
        title:'Weight loss trick: Know your order before sitting down at a restaurant.',
        body: 'You sit down at a restaurant intending to order a salad, wrap, or something else that’s small and semi-healthy. Then one guy at your table starts talking about buffalo wings. Another says he’s leaning toward the bacon cheeseburger and asks if anyone wants spinach-artichoke dip to start. Research has long shown that if fellow diners choose unhealthy foods, you’re much more likely to do the same. Once in a while is no big deal, but if you eat out a lot, you have to stick to your guns and not let others sway your order. Before even arriving at the restaurant, make a promise to yourself that you won’t change your decision last-minute based on what others are getting.',
        imageId: 37
    },
    {
        title:'Weight loss trick: Use smaller wine glasses.',
        body: 'Wine is one of the sneakiest sources of extra calories, and it’s so easy to drink more than you think—especially when using jumbo glasses. Cornell Food and Brand Lab Opens a New Window.  scientists found that people pour themselves 12 percent more wine when using wide-bottom glasses and another 12 percent more when they hold the glass when pouring versus setting it on the table. To better control your portions, opt for smaller and thinner wine glasses and set the glass down before pouring.',
        imageId: 38
    },
    {
        title:'Rest three to five minutes between sets.',
        body: 'To lift your hardest, your body needs to regenerate as much ATP—the fuel source for muscle contractions—as possible. Take the time to feel fully recovered before you attempt any personal record on a lift.',
        imageId: 39
    },
    {
        title:'Work on your weak points.',
        body: 'If you can’t lock out your elbows on the bench press, try setting the safety rails in a power rack at about your sticking point on the lift. Put roughly 10% more than your one-rep maximum weight on the bar and then try to press it. You probably won’t be able to move the bar, but try hard anyway for 6–10 seconds. Do four to six reps, resting a few seconds in between, and then lighten the load to the weight you usually have trouble locking out. Your central nervous system should now be sufficiently fired up for you to lift it.',
        imageId: 40
    },
    {
        title:'Load the bar with small plates.',
        body: 'It makes the bar look lighter. Your brain won’t register it as heavy. That mental advantage can help you lift heavier or do more reps.',
        imageId: 42
    },
    {
        title:'Warm up your rotator cuff before any pressing exercise.',
        body: 'Take a two to four-pound medicine ball and push it into a wall with one hand, keeping your arm straight. Roll the ball around on the wall (push hard so it doesn’t slip), tracing the alphabet. Do two sets on each arm, and then do your pressing. Firing up the rotator cuff increases the stability in your shoulders.',
        imageId: 43
    },
    {
        title:'Do box jumps in your warm-up for leg days.',
        body: 'Do three sets of three reps, resting 60 seconds between each set. Explosive exercises wake up the central nervous system to recruit maximum muscle.',
        imageId: 44
    },
    {
        title:'Try a few glute bridges before deadlifting.',
        body: 'Lie on your back on the floor with your knees bent and feet close to your butt. Dig your heels into the floor and bridge up with your hips, focusing on the contraction in your glutes. Do two sets of eight to 10 reps. Preactivating the glutes—the prime movers in a proper deadlift—allows them to fire at their fullest.',
        imageId: 45
    },
    {
        title:'Squeeze your glutes on every lift.',
        body: 'Tightness through your hips leads to increased stability everywhere and will let you put up more weight immediately on any exercise. In other words, you can, in fact, pull a new record “out of your ass.”',
        imageId: 46
    },
    {
        title:'Use lifting chalk.',
        body: 'Magnesium carbonate (not the same stuff you used in school to write a sentence 100 times on the blackboard) keeps your hands dry for a superstrong grip. Like the weight belt, it can help you instantly increase your max—and more safely, too.',
        imageId: 47
    },
    {
        title:'Wear a weight belt.',
        body: 'A lifting belt will help support your lower back on deadlifts, squats, and presses. You can increase your max by tens of pounds just by strapping one on, and you’ll be doing your lower back a favor as well.',
        imageId: 48
    },
    {
        title:'Try a hook grip.',
        body: 'Grab the bar overhand as usual but wrap your thumbs around it first. Then wrap your fingers over your thumbs. Reinforcing the thumb with the strength of your other fingers gives you a much better grip. It’s a great way to lift heavier without using straps, which don’t let your grip muscles work hard.',
        imageId: 49
    },
    {
        title:'Push your belly out during a squat or deadlift.',
        body: 'Take a deep breath from your diaphragm so that your stomach swells outward. (If your shoulders rise, you took the breath into your lungs.) If you’re wearing a weight belt, push your gut into the belt so it feels very tight. Inflating your abdomen increases core stability. Do this on sets of five reps or fewer for an immediate strength increase of at least 10%.',
        imageId: 50
    },
    {
        title:'Go heavy.',
        body: 'Before you curl, load the bar with 20% more weight than what you can lift for five reps. Cheat curl the bar to the top position and hold for two seconds, tensing every muscle. Take four seconds to lower the bar down. Rest one minute, then do your normal set of curls. The load you’re about to lift will feel lighter.',
        imageId: 51
    },
    {
        title:'When bench-pressing, drive your heels into the floor.',
        body: 'Actively trying to force your body backward on the bench helps turn the lift into a full-body exercise, and it’ll feel easier.',
        imageId: 52
    },
    {
        title:'If the bar isn’t coming up evenly during a lift.',
        body: '(as in the bench or shoulder press), or one side begins to sink, squeeze the bar on the lagging side as hard as you can. You’ll send a message to the nervous system, and it will increase strength on that side.',
        imageId: 53
    },
    {
        title:'Keep your wrists straight during a pressing lift.',
        body: 'The heavier the weight gets, the more you may have a tendency to let your wrists roll back, but don’t. Keeping them straight is a more natural and stable position that will allow you to complete the lift more easily. If you can’t keep them straight, work on your grip strength.',
        imageId: 54
    },
    {
        title:'Do more strength-building with single-arm presses.',
        body: 'Dumbbell presses—overhead/military and chest—are obviously great for strength-building. They require more stabilization through the core than barbell presses do. By taking it to one side at a time, you engage the core muscles even more to keep your body balanced. You also can get a greater range of motion, particularly on overhead movements, because you can focus your attention even better on your alignment. More ROM means more muscles are doing the work—and more strength-building.',
        imageId: 55
    },
    {
        title:'Try suitcase carries for an overall better posture, core, and grip.',
        body: 'It looks so basic—holding a single heavy weight on one side and walking—but performing suitcase carries does so many great things for your strength: working your grip, your core, and your posture, as your core must fight the imbalanced weight to stay upright. To do this exercise, grab dumbbells that are as heavy as your hands can handle and walk 10-20 meters.',
        imageId: 56
    },
    {
        title:'Do wall sits to help your squats.',
        body: 'Yep, like those ones your high school coach made you do during conditioning workouts. “Often neglected because it’s not a ‘sexy’ exercise, wall sits are very effective at building a strong base for squats and mitigating knee pain,” says Josh Holland, NYC-based personal trainer and founder of Zoomtion Fitness. To do: Plant your feet between hip- and shoulder-width apart, and get your hips down so your knees are at 90 degrees. Try to hold for 2–3 minutes or until you can’t take it anymore. ',
        imageId: 57
    },
    {
        title:'Improve your grip strength with a set of hangs.',
        body: 'It’s as simple as this: Grasping a pullup bar and holding on. “Hanging may seem boring at first, but it’s much tougher than people realize,” Holland explains. “It helps in decompressing the joints and improves grip strength when translating to other exercises that require it.”',
        imageId: 58
    },
    {
        title:'Create fuctional training exercises for your muscles.',
        body: 'Doing a strict split routine is all well and good for hypertrophy, if you’ve got the time and the inclination. But even bodybuilders—the smart ones, anyway—will tell you that at least once a week you should make sure your muscles can work together, too, not just in isolation. Movements like chops, bear crawls, and medicine-ball drills aid in muscular synergy as well as mobility, and both are essential for muscle recruitment and range of motion.',
        imageId: 59
    },
    {
        title:'Rest it out.',
        body: 'You’ve heard it before but it bears repeating (in perhaps a slightly different way): Muscles aren’t built in the gym; they’re built in your bed. Taking a rest-and-recovery day is not lazy—it’s essential for rebuilding after all those micro-tears you put into your muscles during an intense workout. Sometimes, that can mean an active recovery or cross-training day where you take it easy, and other times, it can mean steering clear of the gym entirely. And that’s more than OK.',
        imageId: 60
    },
    {
        title:'Change up your surroundings.',
        body: 'You want to change your body, right? So why go to the exact same machines, in the exact same gym, at the exact same time, on the exact same days of the week? Changing up your routine can not only inspire you to try new exercises or training methods, but also prevent your body from adapting to the same old stimulus. And you don’t have to necessarily get another gym membership—try taking a new fitness class, or even just train outside Opens a New Window. . Normally an early bird? Go at night if you can.',
        imageId: 61
    },
    {
        title:'Squat more often.',
        body: 'You’ve probably heard people talk about squatting every day. That’s probably a little extreme for the average athlete—your body doesn’t need that much stimulus to get stronger—but it does get at a valuable point: Squatting more often can help you develop more strength. Lots of lifters avoid the squat, but squatting two or three times a week—and with some variation, like front squats or safety-bar squats—will definitely inspire growth and boost your testosterone levels Opens a New Window. .',
        imageId: 62
    },
    {
        title:'Stop overloading your assistance exercises.',
        body: 'Accessory exercises should assist the development of your big lifts. That’s a big reason why they exist in the first place, so you should let them do just that. If you’re loading up for a five-rep max of your rear-leg elevated split squat or cranking out a 200-pound face pull, you’re probably losing the form—and, therefore, wasting your time. Instead, focus on moving in a full range of motion, perfecting your tempo, and hitting the muscles the exercise is intended to work. They may not be big barbell movements, but they do help you build strength and progress when it comes to your big lifts.',
        imageId: 63
    },
    {
        title:'Understand your body’s mechanical strengths and weaknesses.',
        body: 'Each big lift has countless variations, and any of those variations can be a better alternative if traditional big lifts just don’t seem to be your thing. It takes a humble outlook to admit that a certain lift just isn’t for you, but you’ll reap serious benefits if you do. Fitness routines aren’t one-size-fits-all, and neither are individual lifts. For example, a lifter with long legs, a short torso, and poor hip mobility probably won’t find it easy to get into a perfect barbell deadlift setup, and he’ll always be at greater risk for injury than if he were to try an alternative like the trap bar deadlift (where he can keep his torso more vertical) and adjust his positioning according to his body type.',
        imageId: 64
    },
    {
        title:'Work out with a training partner.',
        body: 'We all have days when we’re feeling sluggish, tired, or straight-up out of it. Training partners can keep you honest, motivate you to get to the gym, and—most importantly—help you make the most of your effort when you’re there. Most importantly, training partners can form-check you, spot your lifts, and keep you honest.',
        imageId: 65
    }
    
]

const getAdvices = (numberOfAdvices) => {
    var result = [];
    var newArr = advices.slice();
    for(var i = 1 ; i<=numberOfAdvices; i++){
        let index = Math.floor(Math.random()*newArr.length);       
        result.push(newArr[index]);
        newArr.splice(index,1);
    }
    return result;
}

export {getAdvices};