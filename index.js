/**
 *
 * Author: Pierre Dahmani
 * Created: 22.01.2022
 *
 * Description: Example code that we are able to commit and push without any
 * problems if we have no git hooks set up.
 */

// this would be caught by eslint.
const thisShouldBeConst = "hello world";

// this would be formatted by prettier.
console.log("to many spaces...: ", thisShouldBeConst);
console.log(" lets add another console log!");
