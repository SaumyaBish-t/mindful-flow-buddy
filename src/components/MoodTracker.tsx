
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Mood = {
  emoji: string;
  label: string;
  selected: boolean;
};

const MoodTracker: React.FC = () => {
  const [moods, setMoods] = useState<Mood[]>([
    { emoji: '😊', label: 'Happy', selected: false },
    { emoji: '😐', label: 'Neutral', selected: false },
    { emoji: '😢', label: 'Sad', selected: false },
    { emoji: '😰', label: 'Anxious', selected: false },
    { emoji: '😴', label: 'Tired', selected: false },
    { emoji: '😡', label: 'Angry', selected: false },
  ]);
  
  const [saved, setSaved] = useState(false);

  const handleMoodSelect = (index: number) => {
    setMoods(moods.map((mood, i) => ({
      ...mood,
      selected: i === index
    })));
    setSaved(false);
  };

  const handleSave = () => {
    const selectedMood = moods.find(mood => mood.selected);
    if (selectedMood) {
      // In a real app, we would save this to a database or local storage
      console.log(`Mood saved: ${selectedMood.label}`);
      setSaved(true);
      
      // After 3 seconds, reset the saved state
      setTimeout(() => setSaved(false), 3000);
    }
  };

  return (
    <Card className="shadow-md border-therapeutic-lightBlue">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-gray-700">How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {moods.map((mood, index) => (
            <div
              key={mood.label}
              onClick={() => handleMoodSelect(index)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer transition-all ${
                mood.selected 
                  ? 'bg-therapeutic-blue bg-opacity-20 ring-2 ring-therapeutic-blue' 
                  : 'hover:bg-therapeutic-lightBlue hover:bg-opacity-50'
              }`}
            >
              <span className="text-3xl mb-1">{mood.emoji}</span>
              <span className="text-sm font-medium">{mood.label}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-2">
          <Button
            onClick={handleSave}
            disabled={!moods.some(mood => mood.selected) || saved}
            className="bg-therapeutic-blue hover:bg-therapeutic-blue/90 text-white px-6"
          >
            {saved ? 'Saved!' : 'Save Mood'}
          </Button>
        </div>
        
        {saved && (
          <p className="text-center text-therapeutic-green mt-2 text-sm animate-fade-in">
            Your mood has been tracked!
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
