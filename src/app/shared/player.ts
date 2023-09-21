export interface Player {
    id: number,
	name: string,
	team: {
        id: number;
        name: string;
        description: string;
        league: string;
        country: string;
        city: string;
    },
	position: string,
	dateOfBirth: number,
	shirtNumber: number,
    city: string,
    country: string
}
