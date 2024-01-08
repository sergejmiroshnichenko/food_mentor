export interface IQuestionOption {
  genderImg: string;
  button?: string;
  description?: string;
}

export interface IQuestion {
  quizInfo?: string;
  title: string;
  subtitle?: string;
  options: IQuestionOption[];
  screenType: 'rowScreen' | 'columnScreen';
}

export const getQuestions = (selectedGender: string) => {
  const questions: IQuestion[] = [
    {
      quizInfo: '1-minute quiz',
      title: 'Weight Loss Plan',
      subtitle: 'Choose your gender to get started',
      screenType: 'rowScreen',
      options: [
        {
          genderImg: '/male/gender.jpg',
          button: 'Male',
        },
        {
          genderImg: '/female/gender.jpg',
          button: 'Female',
        },
      ],
    },
    {
      title: 'Choose your goal',
      screenType: 'rowScreen',
      options: [
        {
          genderImg:
            selectedGender === 'Male' ? '/male/lose_weight.png' : '/female/lose_weight.jpg',
          description: 'Lose weight',
        },
        {
          genderImg:
            selectedGender === 'Male'
              ? '/male/get_perfect_fit_body.png'
              : '/female/get_perfect_fit_body.jpg',
          description: 'Get perfect fit body',
        },
        {
          genderImg:
            selectedGender === 'Male' ? '/male/tone_muscles.png' : '/female/tone_muscles.jpg',
          description: 'Tone muscles',
        },
        {
          genderImg:
            selectedGender === 'Male' ? '/male/be_healthier.png' : '/female/be_healthier.jpg',
          description: 'Be healthier',
        },
      ],
    },
    {
      title: 'Choose your current body type',
      screenType: 'columnScreen',
      options: [
        {
          genderImg: selectedGender === 'Male' ? '/male/regular.png' : '/female/regular.png',
          description: 'Regular',
        },
        {
          genderImg: selectedGender === 'Male' ? '/male/plumb.png' : '/female/plumb.png',
          description: 'Plumb',
        },
        {
          genderImg:
            selectedGender === 'Male' ? '/male/extra_plumb.png' : '/female/extra_plumb.png',
          description: 'Extra Plumb',
        },
      ],
    },
    {
      title: 'Do you workout?',
      screenType: 'columnScreen',
      options: [
        {
          description: 'No, I don\'t',
          genderImg: '/no_workout.png',
        },
        {
          description: 'Only walks',
          genderImg: '/only_walk.png',
        },
        {
          description: '1-2 times a week',
          genderImg: '/small_workout.png',
        },
        {
          description: '3-5 times a week',
          genderImg: '/big_workout.png',
        },
      ],
    },
    {
      title: 'Enter your email to get your Personal Weight loss Plan!',
      screenType: 'rowScreen',
      options: [{}],
    },
  ];
  return questions;
};
