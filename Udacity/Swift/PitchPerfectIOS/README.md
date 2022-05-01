# PitchPerfectIOS

## Basic Functionality

- [X] The app contains two scenes of content: one for recording an audio file, and one for playing the audio with different effects.

- [X] The app contains two pages of content (one each for recording and playing audio), and uses UINavigationController to navigate between these two scenes.

- [X] All UI elements (buttons and text) are appropriately formatted for iPhone and iPad Portrait and Landscape layouts.

- [X] UI elements are appropriately positioned on the screen for iPhone and iPad portrait and landscape layouts.

## Actions and Outlets

- [X] The app uses IBAction methods to record audio and playback sounds.

- [X] The app connects each button on the Storyboard to the correct IBAction method.

- [X] Labels and buttons are shown or hidden as appropriate.

- [X] In the first scene, the Record and Stop buttons are enabled and disabled appropriately. When no recording is taking place, the Record button is enabled and the Stop button is disabled. When recording is taking place, the Record button is disabled and the Stop button is enabled.

## AVAudioRecorder

- [X] The first scene of the app uses AVAudioRecorder to record audio.

- [X] The app successfully uses AVAudioRecorder to record audio.

## Delegates and Segues

- [X] The app uses the audioRecorderDidFinishRecording() method to determine when the audio has finished recording.

- [X] The app uses the delegate pattern and implements the audioRecorderDidFinishRecording() method.

- [X] The app programmatically triggers a segue from the first scene to the second.

- [X] The app does not use a Storyboard segue hardcoded to the Stop button. A segue from the first scene to the second is programmatically triggered via performSegueWithIdentifier().

## UINavigationController

- [X] The app allows users to re-record audio after a recording is complete.

- [X] The app allows the user to re-record by navigating back to the first scene from the second.

## Sound Effects

- [X] All sound effects are present and play properly.

- [X] The second scene of the app contains the following buttons for audio effects: Snail (slow), Rabbit (fast), Chipmunk (high pitch), Darth Vader (low pitch), Echo and Reverb. All six buttons work properly to play the associated sounds.

## Code Quality

* Code is effectively abstracted.

* Potentially repetitive blocks of code are effectively abstracted into reusable methods.

* Code follows appropriate style.

* Code adheres to Swift naming and style conventions.

* Code is readable by others.

* Code is readable and easy to follow. Any code that may be hard to understand is commented effectively.
