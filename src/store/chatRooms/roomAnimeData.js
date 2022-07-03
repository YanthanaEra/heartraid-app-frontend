export const roomAnimeData = {
    title: 'CHAT_ROOM_TITLE_ANIME',
    description: 'CHAT_ROOM_TITLE_DESCRIPTION',
    notes: 'CHAT_ROOM_TITLE_NOTES',
    currentVisitors: 2,
    visitorsList: [
        {
            id: 123456,
            username: 'KätzchenFreundin',
            gender: 'female',
            registeredSince: 'vor 5 min',
            userProfilePath: '/user',
            userAvatarPathSmall: '/img/user-pictures/123456/avatar_small_20220410.png',
        },
        {
            id: 654322,
            username: 'pussyHunter',
            gender: 'male',
            registeredSince: 'vor 21 min',
            userProfilePath: '/user',
            userAvatarPathSmall: '/img/user-pictures/default/avatar_small_m.png',
        },
    ],
    chatMessages: [
        {
            id: 648644,
            time: '> 5 min',
            fromUserId: 123456,
            fromUser: 'KätzchenFreundin',
            message: 'Ich liebe *Katzen* über alles ❤️ 🐱!!! Wer noch? Und warum?',
        },
        {
            id: 648644,
            time: '> 1 min',
            fromUserId: 654322,
            fromUser: 'pussyHunter',
            message: '@KätzchenFreundin - Ich mag Kätzenchen auch sehr gerne und bring sie gerne zum schnurren.',
        },
        {
            id: 648644,
            time: '> 5 min',
            fromUserId: 123456,
            fromUser: 'KätzchenFreundin',
            message: '@pussyHunter - Ich denke nicht das wir das selbe meinen... Such dir nen anderen Chat.',
        },
    ],
};
