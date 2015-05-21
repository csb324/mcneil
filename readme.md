How to do this
------------------------

1. Include the file in your project.

Download mcneil.js or mcneil.min.js. Include it wherever you like to include things. While you're at it, make sure you have jquery.

2. Initialize McNeil

Here's how to do that:

    $('body').mcneil();

That's the simplest way. If you do that, McNeil will look for every sequence of "Mc" on your page and make sure the "c" is lowercase. What if you're dealing with something else? Don't worry!

3. Check out the options

<table>
    <th>
        <td>Option</td>
        <td>Default</td>
        <td>What it does</td>
    </th>

    <tr>
        <td>targetString</td>
        <td>"Mc"</td>
        <td>This is the full string McNeil looks for.</td>
    </tr>

</table>
