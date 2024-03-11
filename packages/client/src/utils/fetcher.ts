const SERVER_URL = "http://localhost:3000";

export const fetcher = (path: string) => fetch(`${SERVER_URL}/${path}`).then((res) => res.json());

export type Item = {
    id?: number;
    label: string;
    isDone: boolean;
    createdAt?: number;
};
