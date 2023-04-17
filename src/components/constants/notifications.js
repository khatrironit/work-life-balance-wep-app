const motivationalQuotes = [
    "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "Balance is not better time management, but better boundary management. Balance means making choices and enjoying those choices.",
    "Almost everything will work if you unplug it for a few minutes, including you.",
    "It is not enough to be busy...The question is: What are we busy about?",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "The key to a good work-life balance is to set realistic boundaries and stick to them.",
    "Take care of yourself: When you don't sleep, eat crap, don't exercise, and are living off adrenaline for too long, your performance suffers.",
    "Remember that failure is an event, not a person.",
    "The most important thing in life is to learn how to give out love, and to let it come in.",
    "Take time to make your soul happy."
  ];

function getRandomIndex(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
}
export const getRandomQuote = () => {
  const randomIndex = getRandomIndex(motivationalQuotes);
  return motivationalQuotes[randomIndex];
}