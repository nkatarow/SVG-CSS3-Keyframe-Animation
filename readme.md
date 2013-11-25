SVG/CSS3 Keyframe Animation Experiment
===============
**Motion experiment using SVG, CSS3 (transitions and keyframes), and JavaScript**

###Author
Nick Katarow (<http://github.com/nkatarow>)

###Dependencies
- Grunt
- SASS
- jQuery 1.10.2 

###What's being done?
I started out with an Illustrator file and exported it to SVG, dropping it inline on an index page. I figured out which element was which by modifying colors in the webkit inspector and then added appropriate classes to the elements so that I could hook into each of them individually. 

Next, I knew that there were a few CSS animations and transforms that I wanted to use, but didn't want to have to repeat all of the browser prefixes - so I created mixins for them. I started the styling by setting the default positions, rotations, and colors as the final percentage states in the keyframes, working my way backwards to the starting point (becuase the SVG image was set in the final position by default). Eventually when I got to the initial state, I set those properties as the default properties on the various classes so that the image displayed properly before the animations began.

I wanted the freedom to be able to trigger the annimation based on an event, so I made sure the annimations were only triggered when a class of "animate" was added to each element of the SVG. That way, I could trigger the annimation to begin on a click, page scroll, page load, or any other event. In this demo, I simply add the animate class on document ready using jQuery (for ease of implementation and demo purposes).

###Observations
When attempting to add or remove classes on SVG elements, I noticed that I couldn't simply use .addClass() or .removeClass. Instead I had to target the class, and then change it using .attr('class', 'original-classname, new-classname').

I also noticed, that you can't simply stack the CSS keyframe prefixes and separate with commas like this:
	
	@keyframes keyname,
	@-o-keyframes keyname,
	@-moz-keyframes keyname,
	@-webkit-keyframes keyname {
		/* Stuff and things */
	}
	
Instead, they must completely live in their own instances, like this:

	@keyframes keyname {
		/* Stuff and things */
	}
	@-o-keyframes keyname {
		/* Stuff and things */
	}
	@-moz-keyframes keyname {
		/* Stuff and things */
	}
	@-webkit-keyframes keyname {
		/* Stuff and things */
	}


###Conclusion
Overall this was a pretty interesting proof of concept to explore. The CSS keyframe syntax is a bit verbose and takes quite a while to write and duplicate for multi-browser support, but it can be made easier by incorporating SASS mixins. Seems like a nice way to jazz up a page, you just need to keep in mind that it should be considered progressive enhancement and will take a bit of time to write.