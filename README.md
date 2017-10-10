# eye-bot

### The project aims to precisely detect the eye blinks and trigger an action like grabbing the hand by counting the flashes of the eye.

> We used OpenCV to count the number of blinks to grab and ungrab the prosthetic hand accordingly. We have divided this into two parts: 
- The eye-blink-detection module is based on OpenCV that provides us the eye-blink counts.
- Raspberry PI3 module that listens to the blinks of the eye. 

### How to setup:

- `cd eye-bot/eye-detection`
- `python3 detect_blinks.py -p shape_predictor_68_face_landmarks.dat` 
- `cd ../R-PI/`
- `node server.js`

##### Setup on R-PI

  <img src="http://razzpisampler.oreilly.com/images/rpck_1001.png">

#### Working Demo

<a href="https://www.youtube.com/watch?v=4ytR6dX1izQ"> eye-bot </a>
<img src="https://drive.google.com/file/d/0BylUgB3l8Lc6eU94c3BibHFEODA/view?usp=sharing">
