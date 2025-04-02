
// Types for chat messages
export type Message = {
  role: 'user' | 'bot';
  content: string;
  timestamp: string;
};

// Pre-defined responses for our rule-based chatbot
const responses = {
  greeting: [
    "Hello! I'm Mindful, your mental health companion. How are you feeling today?",
    "Hi there! I'm here to support you. How's your day going so far?",
    "Welcome! I'm Mindful, your supportive chat companion. How are you feeling right now?"
  ],
  feeling_bad: [
    "I'm sorry to hear you're feeling down. Would you like to talk about what's troubling you?",
    "That sounds difficult. Remember that it's okay to not be okay sometimes. Would it help to explore what's causing these feelings?",
    "I hear that you're struggling right now. Let's try to understand what's happening together. Can you tell me more?"
  ],
  feeling_good: [
    "I'm glad to hear you're doing well! What positive things have happened today?",
    "That's wonderful! Celebrating positive moments is important. What's something you're grateful for today?",
    "Great to hear! What's something that contributed to your good mood today?"
  ],
  anxiety: [
    "Anxiety can be challenging. Have you tried taking a few deep breaths? Breathe in for 4 counts, hold for 2, and exhale for 6.",
    "When anxiety hits, grounding exercises can help. Can you name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste?",
    "I understand anxiety can be overwhelming. Remember that your thoughts aren't facts, and this feeling will pass."
  ],
  depression: [
    "Depression can make everything feel more difficult. Have you been able to do any small self-care activities today?",
    "When we're feeling depressed, even small steps matter. Could you try doing one tiny positive thing for yourself today?",
    "I hear that you're feeling low. Remember that depression lies to us - you are worthy and things can get better with support."
  ],
  stress: [
    "Stress affects us all. What's one small thing you could do right now to give yourself a moment of peace?",
    "When you're stressed, your body's fight-or-flight response activates. Try progressive muscle relaxation - tense and then release each muscle group.",
    "It sounds like you're carrying a heavy load right now. Is there anything you could delegate or temporarily set aside?"
  ],
  gratitude: [
    "Practicing gratitude can shift our perspective. What's one small thing you appreciate today?",
    "Even on difficult days, finding moments of gratitude can help. What's something, even tiny, that you're thankful for?",
    "Gratitude practice can help build resilience. Would you like to share three things you're grateful for right now?"
  ],
  mindfulness: [
    "Taking a mindful moment can help center you. Try focusing fully on your breath for just 30 seconds.",
    "Mindfulness means being present without judgment. Can you take a moment to notice what you're experiencing right now?",
    "A quick mindfulness practice: notice five sounds around you, moving from the closest to the furthest away."
  ],
  sleep: [
    "Sleep troubles are common with mental health challenges. Have you tried establishing a calming bedtime routine?",
    "Good sleep is important for wellbeing. Limiting screen time before bed and keeping a consistent schedule can help.",
    "If racing thoughts keep you awake, you might try the 4-7-8 breathing technique or progressive relaxation."
  ],
  crisis: [
    "I'm concerned about what you're sharing. If you're in crisis, please reach out to a crisis helpline like 988 in the US, or go to your nearest emergency room.",
    "This sounds serious, and you deserve immediate support from a trained professional. The crisis text line (text HOME to 741741) is available 24/7.",
    "Your safety is the priority. Please connect with crisis services right away - call 988 or your local emergency number."
  ],
  default: [
    "I'm here to listen. Could you tell me more about that?",
    "Thank you for sharing that with me. How does that make you feel?",
    "I appreciate you opening up. What do you think would help in this situation?",
    "That's interesting. How long have you been feeling this way?"
  ]
};

// Simple rule-based response generator
export const generateResponse = (message: string): string => {
  const lowercaseMessage = message.toLowerCase();
  
  // Check for greetings
  if (
    lowercaseMessage.includes('hello') || 
    lowercaseMessage.includes('hi') || 
    lowercaseMessage.includes('hey')
  ) {
    return getRandomResponse('greeting');
  }
  
  // Check for feelings
  if (
    lowercaseMessage.includes('sad') || 
    lowercaseMessage.includes('unhappy') || 
    lowercaseMessage.includes('miserable') ||
    lowercaseMessage.includes('bad') ||
    lowercaseMessage.includes('terrible') ||
    lowercaseMessage.includes('awful')
  ) {
    return getRandomResponse('feeling_bad');
  }
  
  if (
    lowercaseMessage.includes('happy') || 
    lowercaseMessage.includes('good') || 
    lowercaseMessage.includes('great') ||
    lowercaseMessage.includes('wonderful') ||
    lowercaseMessage.includes('excellent')
  ) {
    return getRandomResponse('feeling_good');
  }
  
  // Check for specific mental health concerns
  if (
    lowercaseMessage.includes('anxious') || 
    lowercaseMessage.includes('anxiety') || 
    lowercaseMessage.includes('nervous') ||
    lowercaseMessage.includes('worry') ||
    lowercaseMessage.includes('panic')
  ) {
    return getRandomResponse('anxiety');
  }
  
  if (
    lowercaseMessage.includes('depress') || 
    lowercaseMessage.includes('hopeless') || 
    lowercaseMessage.includes('worthless') ||
    lowercaseMessage.includes('empty') ||
    lowercaseMessage.includes('numb')
  ) {
    return getRandomResponse('depression');
  }
  
  if (
    lowercaseMessage.includes('stress') || 
    lowercaseMessage.includes('overwhelm') || 
    lowercaseMessage.includes('too much') ||
    lowercaseMessage.includes('can\'t cope')
  ) {
    return getRandomResponse('stress');
  }

  if (
    lowercaseMessage.includes('grateful') || 
    lowercaseMessage.includes('thankful') || 
    lowercaseMessage.includes('appreciate') ||
    lowercaseMessage.includes('gratitude')
  ) {
    return getRandomResponse('gratitude');
  }

  if (
    lowercaseMessage.includes('mindful') || 
    lowercaseMessage.includes('present moment') || 
    lowercaseMessage.includes('meditation') ||
    lowercaseMessage.includes('breathe')
  ) {
    return getRandomResponse('mindfulness');
  }

  if (
    lowercaseMessage.includes('sleep') || 
    lowercaseMessage.includes('insomnia') || 
    lowercaseMessage.includes('can\'t sleep') ||
    lowercaseMessage.includes('tired')
  ) {
    return getRandomResponse('sleep');
  }
  
  // Crisis detection
  if (
    lowercaseMessage.includes('suicid') || 
    lowercaseMessage.includes('kill myself') || 
    lowercaseMessage.includes('end my life') ||
    lowercaseMessage.includes('don\'t want to live') ||
    lowercaseMessage.includes('want to die')
  ) {
    return getRandomResponse('crisis');
  }
  
  // Default response
  return getRandomResponse('default');
};

// Helper to get a random response from a category
const getRandomResponse = (category: keyof typeof responses): string => {
  const categoryResponses = responses[category];
  const randomIndex = Math.floor(Math.random() * categoryResponses.length);
  return categoryResponses[randomIndex];
};
