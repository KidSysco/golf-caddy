export interface Course {
    id: number;
    name: string;
    image: string;
    holes: number;
    parScores: number[];
}

export const courses: Course[] = [
    {
        id: 1,
        name: "Pebble Sands",
        image: "/img/pebble-sands.jpg",
        holes: 9,
        parScores: [5, 3, 4, 4, 4, 3, 4, 3, 5],
    },
    {
        id: 2,
        name: "Sandy Mountains",
        image: "/img/sandy-mountains.jpg",
        holes: 9,
        parScores: [5, 4, 3, 4, 4, 3, 4, 4, 4],
    },
];
