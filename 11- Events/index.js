// Importing the built-in 'events' module from Node.js
// This module provides the EventEmitter class which allows us
// to create, listen to, and emit custom events in our applications.
import EventEmitter from "events";

// Create an instance of EventEmitter
// This 'myEvent' object will act as our event bus (event hub)
// where we can register listeners and trigger events.
const myEvent = new EventEmitter();

/**
 * Registering an event listener using `.on()`
 * - The "greet" event is being listened for.
 * - Whenever "greet" is emitted, the callback function will be executed.
 * - `.on()` allows the event handler to be executed **every time** the event is triggered.
 */
myEvent.on("greet", () => {
  console.log("Greet event was invoked");
});

/**
 * Registering an event listener using `.once()`
 * - The "onlyOnce" event is being listened for.
 * - The callback will only run **once**, no matter how many times
 *   the event is emitted afterward.
 * - Useful for one-time initializations or setup logic.
 */
myEvent.once("onlyOnce", () => {
  console.log("This event uses .once so will be called only once");
});

/**
 * Emitting events using `.emit()`
 * - `.emit()` triggers the event, causing all registered listeners
 *   for that event name to run.
 * - If no listeners are registered for an event, nothing happens.
 */

// First "greet" event emission → will invoke the listener
myEvent.emit("greet");

// First "onlyOnce" event emission → will invoke the listener (executed only once)
myEvent.emit("onlyOnce");

// Second "greet" event emission → listener executes again
myEvent.emit("greet");

// Second "onlyOnce" event emission → listener will NOT be invoked
// because `.once()` ensures it only runs the first time
myEvent.emit("onlyOnce");
