const SERVER_URL = "http://localhost:3000";

export const fetcher = (path: string) => fetch(`${SERVER_URL}/${path}`).then((res) => res.json());

export type Item = {
    id: string | number;
    label: string;
    isDone: boolean;
    createdAt: number;
};

export const postItem = async (item: Item) => {
    await fetch(`${SERVER_URL}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
};

export const putItem = async (item: Partial<Item>) => {
    await fetch(`${SERVER_URL}/items/${item.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
};

export const deleteItem = async (item: Item) => {
    await fetch(`${SERVER_URL}/items/${item.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
};
