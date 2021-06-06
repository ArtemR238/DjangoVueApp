const state = {
    tests: [
        {
            id: 1,
            name: 'Очень длинное название теста',
            status: 'notPassed',
            description:
                'Этот тест позволяет проверить ваши способности к выполнению арифметических действий',
            reward: {
                coins: 10000,
                lightnings: 50000,
            },
            questions: [
                {
                    question:
                        'Если случайная величина распределена по биномиальному закону, то эта случайная величина является случайной величиной… типа',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Дискретного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: '2+2',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        '4',
                    ],
                    answer: '4',
                },
            ],
        },
        {
            id: 2,
            name: 'Самое длинное название теста',
            status: 'notPassed',
            description:
                'Этот тест позволяет проверить ваши способности к выполнению арифметических действий',
            reward: {
                coins: 10000,
                lightnings: 50000,
            },
            questions: [
                {
                    question:
                        'Если случайная величина распределена по биномиальному закону, то эта случайная величина является случайной величиной… типа',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Дискретного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: '2+2',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        '4',
                    ],
                    answer: '4',
                },
            ],
        },
        {
            id: 3,
            name: 'Очень длинное название теста',
            status: 'notPassed',
            description:
                'Этот тест позволяет проверить ваши способности к выполнению арифметических действий',
            reward: {
                coins: 10000,
                lightnings: 50000,
            },
            questions: [
                {
                    question:
                        'Если случайная величина распределена по биномиальному закону, то эта случайная величина является случайной величиной… типа',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Дискретного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: 'Кто я?',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        'Порядкового',
                    ],
                    answer: 'Непрерывного',
                },
                {
                    question: '2+2',
                    options: [
                        'Дискретного',
                        'Непрерывного',
                        'Номинального',
                        '4',
                    ],
                    answer: '4',
                },
            ],
        },
    ],
    testsList: null,
    testsStatus: 'loading',
    questionsList: null,
    questionsStatus: 'loading',
    sendAnswerStatus: 'notReady',
    sendAnswerResult: null,
}

export default state
