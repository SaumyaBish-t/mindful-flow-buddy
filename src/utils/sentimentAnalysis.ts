
// Simple sentiment analysis utility
// In a real app, this would connect to a proper NLP service

// Negative words list
const negativeWords = [
  'sad', 'unhappy', 'depressed', 'miserable', 'anxious', 'worried',
  'stressed', 'overwhelmed', 'hopeless', 'suicidal', 'kill', 'die',
  'death', 'hate', 'angry', 'furious', 'terrible', 'horrible',
  'awful', 'worst', 'pain', 'hurt', 'suffering', 'suicide',
  'worthless', 'useless', 'failure', 'alone', 'lonely', 'empty',
  'meaningless', 'pointless', 'exhausted', 'tired', 'can\'t',
  'never', 'nobody', 'nothing', 'end', 'stop', 'crisis'
];

// Crisis words that should trigger alerts
const crisisWords = [
  'suicide', 'suicidal', 'kill myself', 'end my life', 'take my life',
  'don\'t want to live', 'want to die', 'better off dead', 'no reason to live',
  'can\'t go on', 'give up', 'end it all', 'no way out'
];

export const analyzeSentiment = (text: string): { 
  score: number;  // -1 to 1, where -1 is very negative, 1 is very positive
  isCrisis: boolean;
} => {
  const lowercaseText = text.toLowerCase();
  
  // Crisis check
  const isCrisis = crisisWords.some(word => lowercaseText.includes(word));
  
  // Simple sentiment scoring
  let negativeCount = 0;
  
  for (const word of negativeWords) {
    if (lowercaseText.includes(word)) {
      negativeCount++;
    }
  }
  
  // Calculate a simple sentiment score
  // More sophisticated algorithms would consider word context, intensity, etc.
  const wordCount = text.split(/\s+/).length;
  const sentimentScore = Math.max(-1, Math.min(1, 1 - (negativeCount * 3 / wordCount)));
  
  return {
    score: sentimentScore,
    isCrisis
  };
};
