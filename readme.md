McNeil is a jQuery Plugin for Making Some Letters Lowercase
==================================

Ever run into a situation where using "text-transform: uppercase" ruins your whole life?

Maybe your name is "McNeil", and you need the "c" in your name to be lowercase no matter what, under penalty of death, because of a deal your great great grandfather once made with an evil sorcerer?

Maybe your new startup is called "SwIrLy", and the lowercase letters are ~vital~ to your ~branding~?

Ever wish there were a solution to this problem? McNeil has your back.


How To Improve Your Life With McNeil
====================================

### 1\. Include the file in your project.


Download mcneil.js or mcneil.min.js. Include it wherever you like to include things. While you're at it, make sure you have jquery.

### 2\. Initialize McNeil

Here's how to do that:

    $('body').mcneil();

That's the simplest way. If you do that, McNeil will look for every sequence of "Mc" on your page and make sure the "c" is lowercase. What if you're dealing with something else? Don't worry!

### 3. Check out the options

<table>
    <th>Option</th>
    <th>Default</th>
    <th>What it does</th>

    <tr>
        <td>targetString</td>
        <td>"Mc"</td>
        <td>This is the full string McNeil looks for.</td>
    </tr>

    <tr>
        <td>targetIndex</td>
        <td>2</td>
        <td>This is the position of the letter in the string that you want to force-lowercase. Counting starts at 1, not zero, so the targetIndex of "Mc" is 2. Sorry not sorry.</td>
    </tr>

    <tr>
        <td>inlineStyles</td>
        <td>true</td>
        <td>Should McNeil use inline styles to make this letter lowercase, or should McNeil use a custom class? If true, McNeil uses inline styles. If you want to do other custom styling to your target-letter, set this to false.</td>
    </tr>

    <tr>
        <td>spanClass</td>
        <td>"mcneil-force-lower"</td>
        <td>If inlineStyles is false, this is the class that McNeil adds to the newly-created <span> with your letter. It then appends a style tag to the head of your document, forcing the stuff with this class to be lowercase. Change it if you want to.</td>
    </tr>

</table>

For example, suppose I have a friend named Cynthia, and I'm making her a website. She really wants the "i" in her name to be lowercase no matter what, because she's an artist and she thinks it will look creative, but I'm using "text-transform: uppercase" on some header elements where I mention her name.

This would be a big problem if not for the magic of McNeil!

I include McNeil and add this to my javascript:

    $(document).ready(function() {
        $('body').mcneil({
            targetString: "Cynthia",
            targetIndex: 6
        });
    })

Cynthia is happy, and we go out for cupcakes and have a great afternoon.

Problems McNeil Does Not Solve
===============

1. Using caps lock
2. Startups thinking it's even a good idea to call themselves "SwIrLy"
3. Loneliness

