// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Welcome and thank you for participating in our experiment!
            <br />
            <br />
             `,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `The experiment will be structured in two blocks, each consisting of 60 cubist artworks in randomized order.
            In the first block you are asked to rate the pictures on liking.
            In the second block pictures are again rated but this time for detectability of objects.
            In both cases you will chose ratings from 1 ("not at all") to 7 ("very")..
            <br />
            <br />
            Before the experiment starts you will look at few ishihara plates to detect any color-blindness, as this may influence the results.
            If you can see a number in the ishihara plate write that down in the textbox. If not just answer 'no'.`,
    buttonText: 'go to Ishihara tests'
});

const begin = babeViews.view_generator('begin',{
    trials: 1,
    name: 'begin',
    title: 'First Block',
    text:  `Now the experiment starts.
            <br />
            <br />
            In the first block rate the pictures on liking.`,
    buttonText: 'go to first block'
});
const begin2 = babeViews.view_generator('begin',{
    trials: 1,
    name: 'begin2',
    title: 'Second Block',
    text:  `Now the second block begins.
            <br />
            <br />
            Rate the pictures on detectability of objects from now on.`,
    buttonText: 'go to second block'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/

// Here, we initialize a forcedChoice view
const ishihara = babeViews.view_generator('textbox_input',{
    trials: 4,
    name: 'ishihara',
    trail_type: 'ishihara',
    data: _.shuffle(trial_info.textbox_input),
});
const firstblock = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 60,
    // name and trial_type should be identical to the variable name
    name: 'firstblock',
    trial_type: 'firstblock',
    data: _.shuffle(trial_info.rating_scale),
    title: 'Liking',
    hook:{
      after_response_enabled: check_response
    }
});
const secondblock = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 60,
    // name and trial_type should be identical to the variable name
    name: 'secondblock',
    trial_type: 'secondblock',
    data: _.shuffle(trial_info.rating_scale),
    title: 'Detectability',
    hook:{
      after_response_enabled: check_response
    }
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
